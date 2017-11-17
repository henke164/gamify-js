class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.bowActor = new BowActor();
        this.enemyActor = new EnemyActor();
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
        super.render();
    }
}
