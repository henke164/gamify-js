class InGameScene {
    constructor(game, difficulty, onGameWon, onGameLost) {
        this.game = game;
        this.difficulty = difficulty;
        this.enemyCount = 5 * this.difficulty;
        this.health = Player.getHealth();
        this.enemyController = new EnemyController(this, this.difficulty, this.enemyCount, this.onPlayerAttacked.bind(this));
        this.combatController = new CombatController(this);
        this.playerHandler = new PlayerHandler();
        this.bowController = new BowController(this.combatController.onShoot);
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);
        this.gameState = GAME_STATE_RUNNING;
        this.game.topMenu.setEnemyCount(this.enemyCount);
        /*
        this.enemyController.enemyCount = 0;
        this.enemyController.enemies = new GameObjectArray();
        this.enemyController.enemiesDestroyed = this.enemyCount;
        */
    }

    onPlayerAttacked() {
        this.health--;
        this.game.topMenu.onEnemyDestroyed();
    }

    update() {
        if (this.enemyController.enemyCount === 0 && this.enemyController.enemies.length === 0) {
            this.setGameWon();
        } else if (this.health <= 0) {
            this.setGameLost();
        } else {
            this.bowController.update();
            this.enemyController.update();
            this.combatController.update();
        }
    }

    setGameWon() {
        if (this.gameState == GAME_STATE_RUNNING) {
            this.gameState = GAME_STATE_WON;
            this.resultLabel = new Label('Level Completed! Score:' + this.enemyController.enemiesDestroyed, new Vector2(100, 200));
            this.playerHandler.completeLevel(this.difficulty, this.enemyController.enemiesDestroyed, this.setSummary);

            setTimeout(function() {
                this.game.openMenu();
            }.bind(this), 2000);
        }
    }

    setGameLost() {
        if (this.gameState == GAME_STATE_RUNNING) {
            this.gameState = GAME_STATE_LOST;
            this.resultLabel = new Label('You Lost!', new Vector2(100, 200));

            setTimeout(function() {
                this.game.openMenu();
            }.bind(this), 2000);
        }
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        this.combatController.render(spriteBatch);

        if (this.gameState == GAME_STATE_RUNNING) {
            this.bowController.renderBowAndArrows(spriteBatch);
            this.enemyController.renderEnemies(spriteBatch);
        } else {
            this.resultLabel.render(spriteBatch);
        }
    }

    setSummary(summary) {
        console.log(summary);
    }
}

var GAME_STATE_RUNNING = 1;
var GAME_STATE_WON = 2;
var GAME_STATE_LOST = 3;
