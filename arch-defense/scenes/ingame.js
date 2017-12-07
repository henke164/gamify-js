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
        this.setSummary = this.setSummary.bind(this);
        /*
        this.enemyController.enemyCount = 0;
        this.enemyController.enemies = new GameObjectArray();
        this.enemyController.enemiesDestroyed = this.enemyCount;
        */
    }

    onPlayerAttacked() {
        this.health--;
    }

    update() {
        if (this.enemyController.enemyCount === 0 && this.enemyController.enemies.length === 0) {
            this.setGameWon();
        } else if (this.health <= 0) {
            this.setGameLost();
        }

        this.bowController.update();
        this.enemyController.update();
        this.combatController.update();

        if (this.gameState !== GAME_STATE_RUNNING) {
            this.resultPartial.update();
        }
    }

    setGameWon() {
        if (this.gameState === GAME_STATE_RUNNING) {
            this.gameState = GAME_STATE_WON;
            this.playerHandler.onLevelFinished(this.gameState, this.difficulty, this.enemyController.enemiesDestroyed, this.setSummary);
        }
    }

    setGameLost() {
        if (this.gameState === GAME_STATE_RUNNING) {
            this.gameState = GAME_STATE_LOST;
            this.playerHandler.onLevelFinished(this.gameState, this.difficulty, this.enemyController.enemiesDestroyed, this.setSummary);
        }
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        this.combatController.render(spriteBatch);

        if (this.gameState === GAME_STATE_RUNNING) {
            this.bowController.renderBowAndArrows(spriteBatch);
            this.enemyController.renderEnemies(spriteBatch);
        } else {
            this.resultPartial.render(spriteBatch);
        }
    }

    setSummary(summary) {
        this.resultPartial = new ResultPartial(this, summary);
    }
}

var GAME_STATE_RUNNING = 1;
var GAME_STATE_WON = 2;
var GAME_STATE_LOST = 3;
