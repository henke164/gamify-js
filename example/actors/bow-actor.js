class BowActor {
    constructor() {
        this.startPullLocation = Vector2.zero;
        this.arrows = new GameObjectArray();
        this.addBow();
    }

    addBow() {
        this.bow = new Bow();
    }

    update() {
        var mouseState = Game.input.mouseState;
        this.isPullingArrow = this.startPullLocation != Vector2.zero;

        if (mouseState.leftButtonDown && !this.isPullingArrow) {
            this.startPullLocation = mouseState.position;
            this.loadArrow();
        }

        if(this.isPullingArrow) {
            this.pullDistance = Vector2.distance(Game.input.mouseState.position, this.startPullLocation);
            this.renderPullingArrow();
        }

        if (!mouseState.leftButtonDown && this.isPullingArrow) {
            this.shootArrow();
            this.startPullLocation = Vector2.zero;
        }

        this.bow.update(this.pullDistance);

        this.arrows.updateAll();
    }

    loadArrow() {
        this.arrow = this.arrows.addGameObject(Arrow);
        this.arrow.power = 2;
        this.arrow.position = new Vector2(this.bow.position.x, this.bow.position.y - 8.5);
        this.arrow.faceTowards(this.startPullLocation, TEXTURECORNER.TOP);
    }

    shootArrow() {
        this.arrow.speed = 10 + (this.pullDistance / 10);
        this.arrow.velocity = Vector2.direction(this.arrow.position, this.startPullLocation);
        this.pullDistance = 0;
    }

    renderPullingArrow() {
        var arrowOffset = this.pullDistance * 0.1;
        if (arrowOffset < 9) {
            var direction = Vector2.direction(this.startPullLocation, this.arrow.position);
            this.arrow.position = new Vector2(
                this.bow.position.x + (direction.x * arrowOffset),
                this.bow.position.y + (direction.y * arrowOffset));
        }
    }

    renderBowAndArrows(ctx) {
        this.arrows.renderAll(ctx);
        this.bow.render(ctx);
    }
}
