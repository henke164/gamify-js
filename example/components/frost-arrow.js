class FrostArrow extends Sprite {
    constructor() {
        super(Textures['arrows.frost']);
        this.destroyOnImpact = true;
        this.power = 0.5;
    }

    update() {
        super.update();
        if (this.position.y < 0 ||
            this.position.y > Game.screenSize.height ||
            this.position.x < 0 ||
            this.position.x > Game.screenSize.width) {
            this.destroy();
        }
    }

    render(spriteBatch) {
        super.render(spriteBatch);
    }
}
