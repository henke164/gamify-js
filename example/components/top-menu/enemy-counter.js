class EnemyCounter {
    constructor(scene) {
        this.scene = scene;
        this.enemyCountLabel = new Label("", new Vector2(Game.screenSize.width - 110, 27), 'white', '20px', 'HVD');
    }

    update() {
        var enemiesRemaining = this.scene.enemyCount - this.scene.enemyController.enemiesDestroyed;
        var newText = 'Enemies: ' + enemiesRemaining;
        if (this.enemyCountLabel.text != newText) {
            this.enemyCountLabel.text = newText;
            setTimeout(function() {
                this.enemyCountLabelChanged = true;
            }, 200);
        }
    }

    render(spriteBatch) {
        if (this.enemyCountLabelChanged) {
            var textSize = spriteBatch.context.measureText(this.enemyCountLabel.text);
            this.enemyCountLabel.position.x = Game.screenSize.width - textSize.width - 50;
            this.enemyCountLabelChanged = false;
        }

        this.enemyCountLabel.render(spriteBatch);
    }
}
