class BowActor {
    constructor() {
        this.startDragLocation = Vector2.zero;
        this.arrows = new GameObjectArray();
        this.addBow();
    }

    addBow() {
        this.bow = new Bow();
    }

    update() {
        var mouseState = Game.input.mouseState;
        this.isDragging = this.startDragLocation != Vector2.zero;

        if (mouseState.leftButtonDown && !this.isDragging) {
            this.startDragLocation = mouseState.position;
            this.loadArrow();
        }

        if(this.isDragging) {
            this.dragDistance = Vector2.distance(Game.input.mouseState.position, this.startDragLocation);
            var arrowOffset = this.dragDistance * 0.1;
            if (arrowOffset < 9) {
                var direction = Vector2.direction(this.startDragLocation, this.arrow.position);
                this.arrow.position = new Vector2(
                    this.bow.position.x + (direction.x * arrowOffset),
                    this.bow.position.y + (direction.y * arrowOffset));
            }
        }

        if (!mouseState.leftButtonDown && this.isDragging) {
            this.shootArrow();
            this.startDragLocation = Vector2.zero;
        }

        this.bow.update(this.dragDistance);

        this.arrows.updateAll();
    }

    loadArrow() {
        this.arrow = this.arrows.addGameObject(Arrow)
        this.arrow.power = 2;
        this.arrow.position = new Vector2(this.bow.position.x, this.bow.position.y - 8.5);
        this.arrow.faceTowards(this.startDragLocation, TEXTURECORNER.TOP);
    }

    shootArrow() {
        this.arrow.speed = 10 + (this.dragDistance / 10);
        this.arrow.velocity = Vector2.direction(this.arrow.position, this.startDragLocation);
        this.dragDistance = 0;
    }

    renderBowAndArrows(ctx) {
        this.arrows.renderAll(ctx);
        this.bow.render(ctx);
    }
}
