class Bow extends Sprite {
    constructor() {
        super(new Texture2D("images/bow.png", 100));
        this.position = new Vector2(Game.screenSize.width / 2, Game.screenSize.height - 40);
    }

    update(pullDistance) {
        if(pullDistance == 0) {
            super.faceTowards(Game.input.mouseState.position, TEXTURECORNER.TOP);
        }

        super.update();
    }
}
