class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.bowActor = new BowActor();
        this.enemyActor = new EnemyActor();
        this.score = 0;
        this.scoreLabel = new Label('Score: ' + this.score, new Vector2(50, 50), 'white', '50px');
    }

    update() {
        this.bowActor.update();
        this.enemyActor.update();
        this.detectCollisions();
        super.update();
    }

    detectCollisions() {
        var collisions = CollisionDetector.findCollisions(
            this.bowActor.arrows,
            this.enemyActor.enemies);

        collisions.forEach(collision => {
            var arrow = collision.go1;
            var monster = collision.go2;
            arrow.shouldDestroy = arrow.destroyOnImpact;
            monster.reduceHealth(arrow.speed * arrow.power);
            if (monster.shouldDestroy) {
                this.score++;
                this.scoreLabel.text = 'Score: ' + this.score;
            }
        });
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
