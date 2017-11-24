class MenuScene {
    constructor(game) {
        this.level = 1;
        this.background = new Texture2D('images/background.png', Game.screenSize.width, Game.screenSize.height);
        this.startButton = new Button();
        this.startButton.text = 'Start Game';
        this.startButton.onClick = () => {
            game.startGame(this.level);
        };

        this.talentButton = new Button();
        this.talentButton.text = 'Skills';
        this.talentButton.onClick = () => {
            game.setAbilityTreeScene();
        };
    }

    update() {
        this.startButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.startButton.texture.width / 2),
            Game.screenSize.height / 2 - 100);

        this.talentButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.talentButton.texture.width / 2),
            Game.screenSize.height / 2);

        this.startButton.update();
        this.talentButton.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        this.startButton.render(spriteBatch);
        this.talentButton.render(spriteBatch);
    }
}
