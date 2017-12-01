class MenuScene {
    constructor(game) {
        this.game = game;
        this.difficulty = Player.selectedDifficulty;
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);

        this.initializeStartButton();
        this.initializeTalentButton();
        this.initializeLevelSelector();
    }

    initializeStartButton() {
        this.startButton = new Button();
        this.startButton.text = 'Start Game';
        this.startButton.onClick = () => {
            console.log('starting with difficulty:' + this.difficulty);
            this.game.startGame(this.difficulty);
        };
    }

    initializeTalentButton() {
        this.talentButton = new Button();
        this.talentButton.text = 'Skills';
        this.talentButton.onClick = () => {
            this.game.setAbilityTreeScene();
        };
    }

    initializeLevelSelector() {
        this.levelSelector = new GameObjectArray();
        var fromLevel = Player.maxReachedDifficulty <= 2 ? 1 : Player.maxReachedDifficulty - 2;
        var toLevel = Player.maxReachedDifficulty <= 2 ? 6 : Player.maxReachedDifficulty + 3;

        for (var x = fromLevel; x < toLevel; x++) {
            var levelButton = this.levelSelector.addGameObject(Button);
            levelButton.texture = new Texture2D('assets/button.png', 80, 75);
            levelButton.text = x;
            levelButton.value = x;
            var parent = this;
            levelButton.onClick = function() {
                parent.difficulty = this.value;
                Player.selectedDifficulty = this.value;
            }.bind(levelButton);
        }
    }

    update() {
        this.startButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.startButton.texture.width / 2),
            Game.screenSize.height / 2 - 100);

        this.talentButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.talentButton.texture.width / 2),
            Game.screenSize.height / 2);

        this.levelSelector.updateAll((x, btn) => {
            if (this.difficulty == btn.value) {
                if(btn.texture.src === 'assets/button.png'); {
                    btn.texture.src = 'assets/button_sel.png';
                }
            } else {
                if(btn.texture.src !== 'assets/button.png'); {
                    btn.texture.src = 'assets/button.png';
                }
            }

            var width = (btn.texture.width + 10) * this.levelSelector.length - 10;

            btn.position = new Vector2(
                (Game.screenSize.width / 2) - (width / 2) +
                (x * (btn.texture.width + 10)),
                200);
        });

        this.startButton.update();
        this.talentButton.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        this.startButton.render(spriteBatch);
        this.talentButton.render(spriteBatch);
        this.levelSelector.renderAll(spriteBatch);
    }
}
