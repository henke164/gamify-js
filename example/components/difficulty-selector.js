class DifficultySelector {
    constructor(position = Vector2.zero) {
        this.panel = new Texture2D('assets/level_panel.png', Game.screenSize.width);
        this.difficulty = Player.selectedDifficulty;
        this.position = position;
        this.initialize();
    }

    initialize() {
        this.difficultySelector = new GameObjectArray();
        this.difficultySelectorSize = {
            width: 80,
            height: 75
        };

        var row = 0;
        var column = 0;
        var level = 1;
        for (var x = 0; x < 10; x++) {
            var enabled = level <= Player.maxReachedDifficulty + 2;
            var parent = this;
            var levelButton = this.difficultySelector.addGameObject(Button);
            levelButton.position = new Vector2(
                (this.position.x + 35) + (column * this.difficultySelectorSize.width),
                (this.position.y + 50) + (row * this.difficultySelectorSize.height));

            if (enabled) {
                levelButton.text = level;
                levelButton.texture = Textures['difficultySelector.enabled'];
                levelButton.onClick = function() {
                    Player.selectedDifficulty = this.value;
                }.bind(levelButton);
                this.initializeRibbon(levelButton);
            } else {
                levelButton.texture = new Texture2D('assets/level_locked.png', this.difficultySelectorSize.width, this.difficultySelectorSize.height);
            }

            levelButton.value = level++;

            if (x == 4) {
                row++;
                column = 0;
            } else {
                column++;
            }
        }
    }

    initializeRibbon(levelButton, level) {
        var ribbon = this.difficultySelector.addGameObject(Sprite);

        if (level > Player.maxReachedDifficulty) {
            ribbon.texture = new Texture2D('assets/ribbon_0.png', this.difficultySelectorSize.width);
        } else {
            ribbon.texture = new Texture2D('assets/ribbon_1.png', this.difficultySelectorSize.width);
        }

        ribbon.position = new Vector2(levelButton.position.x + this.difficultySelectorSize.width / 2,
            levelButton.position.y + this.difficultySelectorSize.height - 14);
    }

    update() {
        this.difficultySelector.updateAll((x, btn) => {
            if (Player.selectedDifficulty == btn.value) {
                if (btn.texture === Textures['difficultySelector.enabled']) {
                    btn.texture = Textures['difficultySelector.selected'];
                }
            } else {
                if (btn.texture === Textures['difficultySelector.selected']) {
                    btn.texture = Textures['difficultySelector.enabled'];
                }
            }
        });
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.panel, Vector2.zero);
        this.difficultySelector.renderAll(spriteBatch);
    }
}
