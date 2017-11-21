class Arrow extends Sprite {
    constructor() {
        super(Textures['arrows.default']);
        this.destroyOnImpact = true;
        this.power = 1;
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
