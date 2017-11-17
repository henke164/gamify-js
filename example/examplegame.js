class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.startDragLocation = new Vector2(0, 0);
        this.addBow();
        this.startMonsterSpawnInterval();

        this.background = new Image;
        this.background.src = "images/background.png";
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

    startMonsterSpawnInterval() {
        var t = this;
        setInterval(function () {
            var monster = t.createGameObject(Monster);
            monster.position = new Vector2(t.canvas.width / 2, 0);
            monster.velocity = new Vector2(0, 1)
            monster.speed = 4;
        }, 8000);

        var monster = t.createGameObject(Monster);
        monster.position = new Vector2(t.canvas.width / 2, 0);
        monster.velocity = new Vector2(0, 1)
        monster.speed = 4;
    }

    render() {
        this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
        super.render();
    }
}
