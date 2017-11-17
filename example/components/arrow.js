class Arrow extends GameObject {
    constructor() {
        super("images/arrow.png");
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

    render(ctx) {
        super.render(ctx);
    }
}
