class TopMenu {
    constructor() {
        this.background = new Texture2D("assets/top-menu.png", Game.screenSize.width, 40);
        this.label = new Label("", new Vector2(Game.screenSize.width - 110, 27), 'white', '20px', 'HVD');
    }

    setEnemyCount(enemyCount) {
        this.enemyCount = enemyCount;
        this.label.text = 'Enemies: ' + this.enemyCount;
        this.labelChanged = true;
    }

    onEnemyDestroyed() {
        this.enemyCount--;
        this.label.text = 'Enemies: ' + this.enemyCount;
        this.labelChanged = true;
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        if (this.labelChanged) {
            var textSize = spriteBatch.context.measureText(this.label.text);
            console.log(this.label.text, textSize.width);
            this.label.position.x = Game.screenSize.width - textSize.width - 50;
            this.labelChanged = false;
        }

        this.label.render(spriteBatch);
    }
}
