class BowActor {
    constructor() {
        this.startDragLocation = Vector2.zero;
        this.arrows = new GameObjectArray();
        this.addBow();
        this.holdTime = 0;
    }

    addBow() {
        this.bow = new Bow();
    }

    update() {
        var mouseState = Game.input.mouseState;

        /*
            this.isDragging = this.startDragLocation != Vector2.zero;

            if (mouseState.leftButtonDown && !this.isDragging) {
                this.startDragLocation = mouseState.position;
            }

            if (!mouseState.leftButtonDown && this.isDragging) {
                var dist = Vector2.distance(mouseState.position, this.startDragLocation);
                this.shootArrow(this.startDragLocation, dist);
                this.startDragLocation = Vector2.zero;
            }

            if (!this.isDragging) {
                this.bow.update();
            }
        */

        this.isDragging = this.startDragLocation != Vector2.zero;

        this.bow.update(this.holdTime > 0);

        if (mouseState.leftButtonDown) {
            if(this.holdTime == 0) {
                this.startDragLocation = mouseState.position;
                this.loadArrow();
            }
            this.holdTime += 2;
        }

        if (!mouseState.leftButtonDown && this.holdTime > 0) {
            if(this.holdTime > 5000) {
                this.holdTime = 5000;
            }
            this.shootArrow();
            this.startDragLocation = Vector2.zero;
            this.holdTime = 0;
        }

        this.arrows.updateAll();
    }

    loadArrow() {
        this.arrow = this.arrows.addGameObject(Arrow)
        this.arrow.power = 2;
        this.arrow.position = new Vector2(this.bow.position.x, this.bow.position.y);
        this.arrow.faceTowards(this.startDragLocation, TEXTURECORNER.TOP);
    }

    shootArrow() {
        this.arrow.speed = this.holdTime;
        this.arrow.velocity = Vector2.direction(this.arrow.position, this.startDragLocation);
        this.bow.bowLine.reset();
    }

    renderBowAndArrows(ctx) {
        this.arrows.renderAll(ctx);
        this.bow.render(ctx);
    }
}
