class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.bowController = new BowController();
        this.enemyController = new EnemyController();
        this.collisionController = new CollisionController();
    }

    update() {
        this.bowController.update();
        this.enemyController.update();
        this.detectCollisions();
        super.update();
    }

    detectCollisions() {
        var collisions = this.collisionController.getCollisions(
            this.bowController.arrows,
            this.enemyController.enemies);

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
        this.bowController.renderBowAndArrows(ctx);
        this.enemyController.renderEnemies(ctx);
        super.render();
    }
}
