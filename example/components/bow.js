class Bow extends GameObject {
    constructor() {
        super("images/bow.png");
        this.speed = 30;
    }

    update() {
        super.faceTowards(Game.input.mouseState.position, TEXTURECORNER.TOP);
        super.update();
    };

    render(ctx) {
        super.render(ctx);
    }
}
