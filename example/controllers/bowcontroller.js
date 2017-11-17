class BowController {
    constructor() {
        this.arrows = new GameObjectArray();
        this.startDragLocation = new Vector2(0, 0);
        this.addBow();
    }

    addBow() {
        this.bow = new Bow();
        this.bow.position = new Vector2(Game.screenSize.width / 2, Game.screenSize.height - 40);
    }

    update() {
        var mouseState = Game.input.mouseState;
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

        this.arrows.updateAll();
    }

    shootArrow(targetPosition, speed) {
        var startPosition = new Vector2(this.bow.position.x, this.bow.position.y);

        var arrow = this.arrows.addGameObject(Arrow)
        arrow.power = 2;
        arrow.position = startPosition;
        arrow.faceTowards(targetPosition, TEXTURECORNER.TOP);
        arrow.speed = speed / 10 > 3 ? speed / 10 : 3;
        arrow.velocity = Vector2.direction(startPosition, targetPosition);
    }

    renderBowAndArrows(ctx) {
        this.bow.render(ctx);
        this.arrows.renderAll(ctx);
    }
}
