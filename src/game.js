class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
        this.canvas.userSelect = 'none';
        this.ctx = this.canvas.getContext('2d');

        Game.input = new Input(this.canvas);
        Game.screenSize = new Rectangle(0, 0, canvas.width, canvas.height);

        setInterval(() => { this.gameLoop(); }, 1000 / 30);
    }

    gameLoop() {
        this.clearCanvas();
        this.update();
        this.render(this.ctx);
    }

    update() { }

    render(ctx) { }

    clearCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

Game.input = null;

Game.screenSize = null;
