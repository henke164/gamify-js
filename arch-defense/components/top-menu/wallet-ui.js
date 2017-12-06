class WalletUI {
    constructor() {
        this.coinTexture = new Texture2D('assets/coins.png', 27, 27);
        this.walletLabel = new Label(Player.abilityPoints, new Vector2(35, 27), 'white', '20px', 'HVD');
    }

    update() {
        this.walletLabel.text = Player.abilityPoints;
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.coinTexture, new Vector2(8, 6));
        this.walletLabel.render(spriteBatch);
    }
}
