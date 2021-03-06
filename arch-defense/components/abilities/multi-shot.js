class MultiShotAbility extends BaseAbility
{
    constructor(scene, level) {
        super(scene, level);
    }

    onShoot() {
        var bowController = this.scene.bowController;
        var mainArrow = bowController.arrow;
        var angle = this.level * 3;

        if (angle > 45 / this.level) {
            angle = 45 / this.level;
        }

        var rotation = mainArrow.rotation + angle;
        var dist = Vector2.distance(bowController.startPullLocation, bowController.bow.position);
        for(var x = 0; x < Math.floor(this.level / 2); x++) {
            var targetLocation = this.getTargetLocation(bowController.bow.position, rotation, dist);
            this.shootClonedArrowTowardsDirection(targetLocation);
            rotation += angle;
        }

        rotation = mainArrow.rotation - angle;
        for(var x = 0; x < this.level / 2; x++) {
            var targetLocation = this.getTargetLocation(bowController.bow.position, rotation, dist);
            this.shootClonedArrowTowardsDirection(targetLocation);
            rotation -= angle;
        }
    }

    shootClonedArrowTowardsDirection(targetLocation) {
        var bowController = this.scene.bowController;
        var mainArrow = bowController.arrow;
        var arrow = bowController.arrows.addGameObject(FrostArrow);
        arrow.power = mainArrow.power / 4;
        arrow.position = mainArrow.position.clone();
        arrow.speed = mainArrow.speed;
        arrow.faceTowards(targetLocation, TEXTURECORNER.TOP);
        arrow.velocity = Vector2.direction(mainArrow.position, targetLocation);
    }

    getTargetLocation(position, val, hlen) {
        if (val >= 0 && val <= 100)
        {
            return new Vector2(
                position.x + (hlen * Math.sin(Math.PI * val / 180)),
                position.y - (hlen * Math.cos(Math.PI * val / 180)));
        }
        return new Vector2(
            position.x - (hlen * -Math.sin(Math.PI * val / 180)),
            position.y - (hlen * Math.cos(Math.PI * val / 180)));
    }
}

MultiShotAbility.id = 7;

MultiShotAbility.icon = new Texture2D('assets/abilities/blizzard.png', 80);

MultiShotAbility.spellName = 'Blizzard';

MultiShotAbility.description = 'Fires 1 additional frost arrow per level that deals', '25% of the main arrow damage.';
