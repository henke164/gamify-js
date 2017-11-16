class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.addBow();
        this.startDragLocation = new Vector2(0, 0);
    }

    update() {
        this.isDragging = this.startDragLocation != Vector2.zero;
        if (this.input.mouseState.leftButtonDown && !this.isDragging) {
            this.startDragLocation = this.input.mouseState.position;
        }

        if (!this.input.mouseState.leftButtonDown && this.isDragging) {
            var dist = Vector2.distance(this.input.mouseState.position, this.startDragLocation);
            this.shootArrow(this.startDragLocation, dist);
            this.startDragLocation = Vector2.zero;
        }

        super.update();
    }

    addBow() {
        this.bow = this.createGameObject(Bow);
        this.bow.position = new Vector2(this.canvas.width / 2, this.canvas.height - 40);
    }

    shootArrow(targetPosition, speed) {
        var startPosition = new Vector2(this.bow.position.x, this.bow.position.y);
        var arrow = this.createGameObject(Arrow)
        arrow.position = startPosition;
        arrow.faceTowards(targetPosition, TEXTURECORNER.TOP);
        arrow.speed = speed / 10 > 3 ? speed / 10 : 3;
        arrow.velocity = Vector2.direction(startPosition, targetPosition);
    }
}
