class TopMenu {
    constructor() {
        this.background = new Texture2D("assets/top-menu.png", Game.screenSize.width, 40);
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
    }
}
