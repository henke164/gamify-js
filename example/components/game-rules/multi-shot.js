class MultiShotRule
{
    constructor(game) {
        this.game = game;
        this.level = 5;
    }

    onShoot() {
        var bowActor = this.game.bowActor;
        var mainArrow = bowActor.arrow;
        var angle = 45 / this.level;

        var rotation = mainArrow.rotation + angle;
        var dist = Vector2.distance(bowActor.startPullLocation, bowActor.bow.position);
        for(var x = 0; x < this.level / 2; x++) {
            var targetLocation = this.getTargetLocation(bowActor.bow.position, rotation, dist);
            this.shootClonedArrowTowardsDirection(targetLocation);
            rotation += angle;
        }

        rotation = mainArrow.rotation - angle;
        for(var x = 0; x < this.level / 2; x++) {
            var targetLocation = this.getTargetLocation(bowActor.bow.position, rotation, dist);
            this.shootClonedArrowTowardsDirection(targetLocation);
            rotation -= angle;
        }
    }

    shootClonedArrowTowardsDirection(targetLocation) {
        var bowActor = this.game.bowActor;
        var mainArrow = bowActor.arrow;
        var arrow = bowActor.arrows.addGameObject(Arrow);
        arrow.power = mainArrow.power;
        arrow.position = new Vector2(mainArrow.position.x, mainArrow.position.y);
        arrow.speed = 10 + (bowActor.pullDistance / 10);
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

    onEnemyHit(arrow, enemy) {}
}
