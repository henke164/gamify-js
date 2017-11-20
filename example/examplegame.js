class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.bowActor = new BowActor();
        this.enemyActor = new EnemyActor();
        this.score = 0;
        this.scoreLabel = new Label('s: ' + this.score, new Vector2(50, 50), 'white', '50px');
        this.gameRuleActor = new GameRuleActor(this);
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
