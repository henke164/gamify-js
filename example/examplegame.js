class ExampleGame extends Game {
    constructor(canvas) {
        super(canvas);
        this.openMenu();
        this.abilityHandler = new AbilityHandler();
        this.abilityHandler.loadAbilities();
    }

    openMenu() {
        this.currentScene = new MenuScene(this);
    }

    startGame(level) {
        this.currentScene = new InGameScene(this, level);
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
