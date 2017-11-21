class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.enemyActor = new EnemyActor();
        this.gameRuleActor = new GameRulesActor(this);
        this.bowActor = new BowActor(this.gameRuleActor.onShoot);
        this.score = 0;
        this.scoreLabel = new Label('Score: ' + this.score, new Vector2(50, 50), 'white', '50px');
    }

    update() {
        this.bowActor.update();
        this.enemyActor.update();
        this.gameRuleActor.update();
        super.update();
    }

    setBackground(src) {
        this.background = new Texture2D(src, Game.screenSize.width, Game.screenSize.height);
    }

    render(spriteBatch) {
        if (this.background) {
            spriteBatch.drawTexture(this.background, Vector2.zero);
        }

        this.bowActor.renderBowAndArrows(spriteBatch);
        this.enemyActor.renderEnemies(spriteBatch);

        this.scoreLabel.render(spriteBatch);
        super.render();
    }
}
