class ResultPartial {
    constructor(scene, summary) {
        this.closeButton = new Button();
        this.closeButton.text = 'Okay!';
        this.closeButton.position = new Vector2(150, 310);
        this.closeButton.font = '24px HVD';
        this.closeButton.onClick = () => {
            this.scene.game.openMenu();
        };

        this.scene = scene;
        this.panel = new Texture2D('assets/panel_2.png', Game.screenSize.width);
        this.summary = summary;

        if (this.summary.gameState == GAME_STATE_WON) {
            this.resultLabel = new Label('Level Completed!', new Vector2(75, 200), '#333', '42px', 'HVD');
            this.xpLabel = new Label('XP: ' + this.summary.experience, new Vector2(75, 240), '#333', '16px', 'HVD');

            if (this.summary.abilityPoints) {
                this.apLabel = new Label('Coins: ' + this.summary.abilityPoints, new Vector2(75, 280), '#333', '16px', 'HVD');
            }

            if (summary.fromLevel != summary.toLevel) {
                this.xpLabel.text += ' (' + (summary.toLevel - summary.fromLevel) + 'x Level up!)';
            }
        } else {
            this.resultLabel = new Label('You Lost!', new Vector2(75, 200), '#333', '42px', 'HVD');
        }
    }

    update() {
        this.closeButton.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.panel, new Vector2(0, 100));
        this.resultLabel.render(spriteBatch);

        if (this.xpLabel) {
            this.xpLabel.render(spriteBatch);
        }

        if (this.apLabel) {
            this.apLabel.render(spriteBatch);
        }

        this.closeButton.render(spriteBatch);
    }
}
