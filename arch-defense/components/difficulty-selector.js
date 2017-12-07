class DifficultySelector {
    constructor() {
        this.panel = new Texture2D('assets/panel_2.png', Game.screenSize.width);
        this.difficulty = Player.selectedDifficulty;
        this.position = new Vector2(0, 100);
        this.initialize();
    }

    initialize() {
        this.difficultySelector = new GameObjectArray();

        var row = 0;
        var column = 0;
        var playerProgress = Player.completedLevels.length > 0 ? Player.completedLevels[0] : 0;
        var level = playerProgress - 2;

        if (level < 1) {
            level = 1;
        }

        if (Player.selectedDifficulty < level) {
            Player.selectedDifficulty = level;
        }

        for (var x = 0; x < 6; x++) {
            var enabled = level <= playerProgress + 2;
            var parent = this;
            var levelButton = this.difficultySelector.addGameObject(Button);
            levelButton.position = new Vector2(
                (this.position.x + 55) + (column * difficultySelectorSize.width),
                (this.position.y + 50) + (row * difficultySelectorSize.height));

            if (enabled) {
                levelButton.text = level;
                levelButton.texture = Textures['difficultySelector.enabled'];
                levelButton.onClick = function() {
                    Player.selectedDifficulty = this.value;
                    parent.selectedDifficulty = this.value;
                }.bind(levelButton);
                this.initializeRibbon(levelButton, level);
            } else {
                levelButton.texture = Textures['difficultySelector.disabled'];
            }

            levelButton.value = level++;

            if (column == 2) {
                row++;
                column = 0;
            } else {
                column++;
            }
        }
    }

    initializeRibbon(levelButton, level) {
        if (Player.completedLevels.indexOf(level) > -1) {
            var ribbon = this.difficultySelector.addGameObject(Sprite);

            ribbon.texture = new Texture2D('assets/completed_ribbon.png', difficultySelectorSize.width, 45);

            ribbon.position = new Vector2(levelButton.position.x + difficultySelectorSize.width / 2,
                levelButton.position.y + difficultySelectorSize.height - 30);
        }
    }

    update() {
        this.difficultySelector.updateAll();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.panel, this.position);
        this.difficultySelector.renderAll(spriteBatch);
    }
}
