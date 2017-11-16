class Bow extends GameObject {
    constructor(game) {
        super(game, "bow.png");
    }

    update() {
        /*
            Read user input and update position
        */
        super.faceTowards(this.game.input.mousePosition, TEXTURECORNER.TOP);
        super.update();
    };

    render(ctx) {
        super.render(ctx);
    }
}
