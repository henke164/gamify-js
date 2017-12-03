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
        var levelSelectorSize = { 
            width: 80, 
            height: 75 
        };

        var row = 0;
        var column = 0;
        var level = 1;
        for (var x = 0; x < 10; x++) {
            var enabled = level <= Player.maxReachedDifficulty + 2;
            var parent = this;
            var levelButton = this.levelSelector.addGameObject(Button);
            levelButton.position = new Vector2((column * levelSelectorSize.width), 250 + (row * levelSelectorSize.height));

            if (enabled) {
                levelButton.text = level;
                levelButton.texture = Textures['levelSelector.enabled']
                var ribbon = this.levelSelector.addGameObject(Sprite);

                if (level > Player.maxReachedDifficulty) {
                    ribbon.texture = new Texture2D('assets/ribbon_0.png', levelSelectorSize.width);
                } else {
                    ribbon.texture = new Texture2D('assets/ribbon_1.png', levelSelectorSize.width);
                }

                ribbon.position = new Vector2(levelButton.position.x + levelSelectorSize.width / 2, levelButton.position.y + levelSelectorSize.height - 14);
            } else {
                levelButton.texture = new Texture2D('assets/level_locked.png', levelSelectorSize.width, levelSelectorSize.height);
            }

            levelButton.value = level++;
            levelButton.onClick = function() {
                parent.difficulty = this.value;
                Player.selectedDifficulty = this.value;
            }.bind(levelButton);

            if (x == 4) {
                row++;
                column = 0;
            } else {            
                column++;
            }
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
                if (btn.texture === Textures['levelSelector.enabled']) {
                    btn.texture = Textures['levelSelector.selected'];
                }
            } else {
                if (btn.texture === Textures['levelSelector.selected']) {
                    btn.texture = Textures['levelSelector.enabled'];
                }
            }
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
