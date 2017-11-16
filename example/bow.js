class Bow extends GameObject {
    constructor(game) {
        super(game, "bow.png");
        this.speed = 30;
    }

    update() {
        if (!this.game.isDragging) {
            super.faceTowards(this.game.input.mouseState.position, TEXTURECORNER.TOP);
        }
        super.update();
    };

    render(ctx) {
        super.render(ctx);
    }
}
