class InGameScene {
    constructor(game, level, onGameWon, onGameLost) {
        this.enemyCount = 10 * level;
        this.health = Player.baseStats.health;
        this.enemyController = new EnemyController(level, this.enemyCount, this.onPlayerAttacked.bind(this));
        this.combatController = new CombatController(this);
        this.bowController = new BowController(this.combatController.onShoot);
        this.background = new Texture2D('images/background.png', Game.screenSize.width, Game.screenSize.height);

        this.winLabel = new Label('Level Completed!', new Vector2(100, 200));
        this.lostLabel = new Label('You Lost!', new Vector2(100, 200));
    }

    onPlayerAttacked() {
        this.health--;
    }

    update() {
        this.bowController.update();
        this.enemyController.update();
        this.combatController.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        this.combatController.render(spriteBatch);

        if (this.combatController.enemiesDestroyed == this.enemyCount) {
            this.renderGameWon(spriteBatch);
        } else if (this.health <= 0) {
            this.renderGameLost(spriteBatch);
        } else {
            this.bowController.renderBowAndArrows(spriteBatch);
            this.enemyController.renderEnemies(spriteBatch);
        }
    }

    renderGameWon(spriteBatch) {
        this.winLabel.render(spriteBatch);
    }

    renderGameLost(spriteBatch) {
        this.lostLabel.render(spriteBatch);
    }
}
