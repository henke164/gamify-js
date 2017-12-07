class MenuScene {
    constructor(game) {
        this.game = game;
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);

        this.initializeAbilityButton();

        this.difficultySelector = new DifficultySelector();
    }

    initializeAbilityButton() {
        this.abilityButton = new Button();
        this.abilityButton.text = 'Power-ups';
        this.abilityButton.position = new Vector2(245, 500);
        this.abilityButton.font = '24px HVD';
        this.abilityButton.onClick = () => {
            this.game.openAbilityTreeScene();
        };
    }

    update() {
        this.difficultySelector.update();
        this.abilityButton.update();

        if (this.difficultySelector.selectedDifficulty) {
            this.game.startGame(this.difficultySelector.selectedDifficulty);
        }
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        this.difficultySelector.render(spriteBatch);
        this.abilityButton.render(spriteBatch);
    }
}
