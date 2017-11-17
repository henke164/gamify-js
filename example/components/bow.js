class Bow extends GameObject {
    constructor() {
        super("images/bow.png");
        this.speed = 30;
        this.position = new Vector2(Game.screenSize.width / 2, Game.screenSize.height - 40);
        this.bowLine = new BowLine(this);
    }

    update(dragDistance) {
        this.bowLine.update(dragDistance);

        if(dragDistance == 0) {
            super.faceTowards(Game.input.mouseState.position, TEXTURECORNER.TOP);
        }

        super.update();
    }

    render(ctx) {
        this.bowLine.render(ctx);
        super.render(ctx);
    }
}
