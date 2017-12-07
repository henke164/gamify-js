class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.topMenu = new TopMenu(this);
        this.playerHandler = new PlayerHandler(this);
        this.playerHandler.initializePlayer();
        this.openMenu();
    }

    openMenu() {
        this.currentScene = new MenuScene(this);
        this.topMenu.setCurrentScene(this.currentScene);
    }

    startGame(level) {
        this.currentScene = new InGameScene(this, level);
        this.topMenu.setCurrentScene(this.currentScene);
    }

    openAbilityTreeScene() {
        this.currentScene = new AbilityTreeScene(this);
    }

    update() {
        this.currentScene.update();
        this.topMenu.update();
        super.update();
    }

    render(spriteBatch) {
        this.currentScene.render(spriteBatch);
        this.topMenu.render(spriteBatch);
        super.render();
    }
}
