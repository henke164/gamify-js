class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.bowActor = new BowActor();
        this.enemyActor = new EnemyActor();
        this.score = 0;
        this.scoreLabel = new Label('Score: ' + this.score, new Vector2(50, 50), 'white', '50px');
        this.gameRuleActor = new GameRuleActor(this);
    }

    update() {
        this.bowActor.update();
        this.enemyActor.update();
        this.gameRuleActor.update();
        super.update();
    }

    setBackground(src) {
        this.background = new Image;
        this.background.src = src;
    }

    render(ctx) {
        if (this.background) {
            ctx.drawImage(this.background, 0, 0, Game.screenSize.width, Game.screenSize.height);
        }
        this.bowActor.renderBowAndArrows(ctx);
        this.enemyActor.renderEnemies(ctx);

        this.scoreLabel.render(ctx);
        super.render();
    }
}
