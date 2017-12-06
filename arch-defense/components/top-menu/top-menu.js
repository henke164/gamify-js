class TopMenu {
    constructor() {
        this.background = new Texture2D("assets/top-menu.png", Game.screenSize.width, 40);
    }

    setCurrentScene(scene) {
        if (scene instanceof MenuScene ||
            scene instanceof AbilityTreeScene) {
            this.enemyCounter = null;
            this.healthBar = null;
            this.walletUI = new WalletUI();
        } else if (scene instanceof InGameScene) {
            this.walletUI = null;
            this.enemyCounter = new EnemyCounter(scene);
            this.healthBar = new PlayerHealthBar(scene);
        } else {
            console.log('scene not found');
        }
    }

    update() {
        if (this.healthBar) {
            this.healthBar.update();
        }

        if (this.enemyCounter) {
            this.enemyCounter.update();
        }

        if (this.walletUI) {
            this.walletUI.update();
        }
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);

        if (this.healthBar) {
            this.healthBar.render(spriteBatch);
        }

        if (this.enemyCounter) {
            this.enemyCounter.render(spriteBatch);
        }

        if (this.walletUI) {
            this.walletUI.render(spriteBatch);
        }
    }
}
