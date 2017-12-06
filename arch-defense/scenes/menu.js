class MenuScene {
    constructor(game) {
        this.game = game;
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);

        this.initializeTalentButton();

        this.difficultySelector = new DifficultySelector();
    }

    initializeTalentButton() {
        this.talentButton = new Button();
        this.talentButton.text = 'Power-ups';
        this.talentButton.position = new Vector2(245, 280);
        this.talentButton.font = '24px HVD';
        this.talentButton.onClick = () => {
            this.game.setAbilityTreeScene();
        };
    }

    update() {
        this.difficultySelector.update();
        this.talentButton.update();

        if (this.difficultySelector.selectedDifficulty) {
            this.game.startGame(this.difficultySelector.selectedDifficulty);
        }
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        this.difficultySelector.render(spriteBatch);
        this.talentButton.render(spriteBatch);
    }
}
