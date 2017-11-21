class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.setMenuScene();
    }

    setMenuScene() {
        this.currentScene = new MenuScene(this);
    }

    setInGameScene() {
        this.currentScene = new InGameScene(this);
    }

    setAbilityTreeScene() {
        this.currentScene = new AbilityTreeScene(this);
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
