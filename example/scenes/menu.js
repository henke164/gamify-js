class MenuScene {
    constructor(game) {
        this.game = game;
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);

        this.initializeStartButton();
        this.initializeTalentButton();

        this.difficultySelector = new DifficultySelector();
    }

    initializeStartButton() {
        this.startButton = new Button();
        this.startButton.text = 'Start';
        this.startButton.onClick = () => {
            console.log('starting with difficulty:' + Player.selectedDifficulty);
            this.game.startGame(Player.selectedDifficulty);
        };
    }

    initializeTalentButton() {
        this.talentButton = new Button();
        this.talentButton.text = 'Skills';
        this.talentButton.onClick = () => {
            this.game.setAbilityTreeScene();
        };
    }

    update() {
        this.startButton.position = new Vector2(200, 280);

        this.talentButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.talentButton.texture.width / 2),
            Game.screenSize.height / 2);

        this.difficultySelector.update();
        this.startButton.update();
        this.talentButton.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        this.difficultySelector.render(spriteBatch);
        this.startButton.render(spriteBatch);
        this.talentButton.render(spriteBatch);
    }
}
