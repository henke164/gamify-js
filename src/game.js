class Game {
    constructor(canvas) {
        this.gameObjects = [];
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.input = new Input(this.canvas);

        setInterval(() => { this.gameLoop(); }, 1000 / 30);
    }

    createGameObject(type) {
        var obj = new type(this);
        if(!obj instanceof GameObject) {
            console.log('Type is not an GameObject');
            return;
        }
        this.gameObjects.push(obj);
        return obj;
    }

    gameLoop() {
        this.clearCanvas();
        this.update();
        this.render();
    }

    update() {
        var idx = this.gameObjects.length
        while (idx--) {
            this.gameObjects[idx].update(this.ctx);
            if (this.gameObjects[idx].shouldDestroy) {
                this.gameObjects.splice(idx, 1);
            }
        }
    }

    render() {
        this.gameObjects.forEach((gameObject) => {
            gameObject.render(this.ctx);
        });
    }

    clearCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 800, 600);
    }
}
