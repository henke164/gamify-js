class InGameScene {
    constructor(game, difficulty, onGameWon, onGameLost) {
        this.game = game;
        this.difficulty = difficulty;
        this.enemyCount = 5 * this.difficulty;
        this.health = Player.getHealth();
        this.enemyController = new EnemyController(this.difficulty, this.enemyCount, this.onPlayerAttacked.bind(this));
        this.combatController = new CombatController(this);
        this.playerHandler = new PlayerHandler();
        this.bowController = new BowController(this.combatController.onShoot);
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);
        this.gameCompletedTriggered = false;
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

        if (this.enemyController.enemyCount === 0 && this.enemyController.enemies.length === 0) {
            this.renderGameWon(spriteBatch);
        } else if (this.health <= 0) {
            this.renderGameLost(spriteBatch);
        } else {
            this.bowController.renderBowAndArrows(spriteBatch);
            this.enemyController.renderEnemies(spriteBatch);
        }
    }

    renderGameWon(spriteBatch) {
        if (!this.gameCompletedTriggered) {
            this.gameCompletedTriggered = true;
            this.resultLabel = new Label('Level Completed! Score:' + this.combatController.enemiesDestroyed, new Vector2(100, 200));
            this.playerHandler.completeLevel(this.difficulty, this.combatController.enemiesDestroyed, this.setSummary);

            setTimeout(function() {
                this.game.openMenu();
            }.bind(this), 2000);
        }

        this.resultLabel.render(spriteBatch);
    }

    setSummary(summary) {
        console.log(summary);
    }

    renderGameLost(spriteBatch) {
        if (!this.gameCompletedTriggered) {
            this.gameCompletedTriggered = true;
            this.resultLabel = new Label('You Lost!', new Vector2(100, 200));

            setTimeout(function() {
                this.game.openMenu();
            }.bind(this), 2000);
        }

        this.resultLabel.render(spriteBatch);
    }
}
