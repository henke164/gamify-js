class Game {
    constructor(canvas) {
        this.gameObjects = [];
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.input = new Input(this.canvas);

        setInterval(() => { this.gameLoop(); }, 1000 / 30);
    }

    addGameObject(type, position) {
        var obj = new type(this);

        if(!obj instanceof GameObject) {
            console.log('Type is not an GameObject');
            return;
        }

        obj.position = position;

        this.gameObjects.push(obj);
    }

    gameLoop() {
        this.clearCanvas();
        this.update();
        this.render();
    }

    update() {
        for(var x = 0; x < this.gameObjects.length; x++) {
            this.gameObjects[x].update(this.ctx);
        }
    }

    render() {
        for(var x = 0; x < this.gameObjects.length; x++) {
            this.gameObjects[x].render(this.ctx);
        }
    }

    clearCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 800, 600);
    }
}
