class Bow extends Sprite {
    constructor() {
        super(new Texture2D("images/bow.png", 100));
        this.speed = 30;
        this.position = new Vector2(Game.screenSize.width / 2, Game.screenSize.height - 40);
        this.bowLine = new BowLine(this);
    }

    update(pullDistance) {
        this.bowLine.update(pullDistance);

        if(pullDistance == 0) {
            super.faceTowards(Game.input.mouseState.position, TEXTURECORNER.TOP);
        }

        super.update();
    }

    render(spriteBatch) {
        this.bowLine.render(spriteBatch);
        super.render(spriteBatch);
    }
}
