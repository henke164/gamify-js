class Arrow extends GameObject {
    constructor(game) {
        super(game, "images/arrow.png");
        this.power = 10;
    }

    update() {
        super.update();
        if (this.position.y < 0 ||
            this.position.y > this.game.canvas.height ||
            this.position.x < 0 ||
            this.position.x > this.game.canvas.width) {
            this.destroy();
        }

        this.isCollidingWithMonster();
    }

    isCollidingWithMonster() {
        var t = this;
        var monsters = this.game.gameObjects.filter(go => {
            if(go instanceof Monster) {
                return true;
            }
            return false;
        });

        monsters.forEach(monster => {
            if(Vector2.distance(t.position, monster.position) < 20) {
                monster.reduceHealth(this.power);
                this.shouldDestroy = true;
            }
        });
    }

    render(ctx) {
        super.render(ctx);
    }
}
