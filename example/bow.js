class Bow extends GameObject {
    constructor(game) {
        super(game, "bow.png");

        this.speed = 30;
    }

    update() {
        /*
            Read user input and update position
        */
        super.faceTowards(this.game.input.mouseState.position, TEXTURECORNER.TOP);
        super.update();
    };

    render(ctx) {
        super.render(ctx);
    }
}
