class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
        this.canvas.userSelect = 'none';
        this.spriteBatch = new SpriteBatch(canvas);

        Game.input = new Input(this.canvas);
        Game.screenSize = new Rectangle(0, 0, canvas.width, canvas.height);

        setInterval(() => { this.gameLoop(); }, 1000 / 30);
    }

    gameLoop() {
        this.spriteBatch.clear('black');
        this.update();
        this.render(this.spriteBatch);
    }

    update() { }

    render(spriteBatch) { }
}

Game.input = null;

Game.screenSize = null;
