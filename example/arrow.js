class Arrow extends GameObject {
    constructor(game) {
        super(game, "arrow.png");
    }

    update() {
        super.update();
        if (this.position.y < 0 ||
            this.position.y > this.game.canvas.height ||
            this.position.x < 0 ||
            this.position.x > this.game.canvas.width) {
            this.destroy();
        }
    };

    render(ctx) {
        super.render(ctx);
    }
}
