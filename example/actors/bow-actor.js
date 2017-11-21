class BowActor {
    constructor(onShoot) {
        this.onShoot = onShoot;
        this.startPullLocation = Vector2.zero;
        this.arrows = new GameObjectArray();
        this.bow = new Bow();
    }

    update() {
        var mouseState = Game.input.mouseState;
        this.isPullingArrow = this.startPullLocation != Vector2.zero;

        if (mouseState.leftButtonDown && !this.isPullingArrow) {
            this.startPullLocation = mouseState.position;
            this.startPulling();
        }

        if(this.isPullingArrow) {
            this.pullDistance = Vector2.distance(Game.input.mouseState.position, this.startPullLocation);
            this.renderPullingArrow();
        }

        if (!mouseState.leftButtonDown && this.isPullingArrow) {
            this.onShoot();
            this.startPullLocation = Vector2.zero;
        }

        this.bow.update(this.pullDistance);

        this.arrows.updateAll();
    }

    startPulling() {
        this.arrow = this.arrows.addGameObject(Arrow);
        this.arrow.power = 2;
        this.arrow.position = new Vector2(this.bow.position.x, this.bow.position.y - 8.5);
        this.arrow.faceTowards(this.startPullLocation, TEXTURECORNER.TOP);
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

    renderBowAndArrows(spriteBatch) {
        this.arrows.renderAll(spriteBatch);
        this.bow.render(spriteBatch);
    }
}
