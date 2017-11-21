class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.scenes = [
            new MenuScene(this),
            new InGameScene(this)
        ]
        this.currentScene = this.scenes[0];
    }

    update() {
        this.currentScene.update();
        super.update();
    }

    render(spriteBatch) {
        this.currentScene.render(spriteBatch);
        super.render();
    }
}
