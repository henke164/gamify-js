class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.addBow();
    }

    update() {
        /*
            Read user input and update position
        */
        if(this.input.mouseState.leftButtonDown) {
            this.shootArrow();
        }

        super.update();
    };

    addBow() {
        var bow = this.createGameObject(Bow);
        bow.position = new Vector2(this.canvas.width / 2, this.canvas.height - 40);
    }
    shootArrow() {
        var bow = this.gameObjects[0];
        var startPosition = new Vector2(bow.position.x, bow.position.y);
        var targetPosition = this.input.mouseState.position;
        var arrow = this.createGameObject(Arrow)
        arrow.position = startPosition;
        arrow.faceTowards(targetPosition, TEXTURECORNER.TOP);
        arrow.speed = 30;
        arrow.velocity = Vector2.direction(startPosition, targetPosition);
    }
}
