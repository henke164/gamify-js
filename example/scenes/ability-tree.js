class AbilityTreeScene {
    constructor(game) {
        this.background = new Texture2D('images/background.png', Game.screenSize.width, Game.screenSize.height);
        this.panel = new Texture2D('images/panel.png', Game.screenSize.width);

        this.selectedAbility = null;

        this.backButton = new Button();
        this.backButton.text = 'Back';
        this.backButton.onClick = () => {
            game.openMenu();
        };
    }

    update() {
        this.backButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.backButton.texture.width / 2),
            Game.screenSize.height - 200);

        this.backButton.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        spriteBatch.drawTexture(this.panel, Vector2.zero);

        if (this.selectedAbility) {
            this.renderSelectedAbility(spriteBatch);
        } else {
            this.renderGeneralTree(spriteBatch);
        }

        this.backButton.render(spriteBatch);
    }

    renderGeneralTree(spriteBatch) {
        spriteBatch.drawTexture(SpeedIncreaseAbility.icon, new Vector2(50, 50));
        spriteBatch.drawTexture(FireDotAbility.icon, new Vector2(190, 50));
        spriteBatch.drawTexture(MultiShotAbility.icon, new Vector2(340, 50));

        spriteBatch.drawText('0/10', new Vector2(75, 145), "12px Arial", 'white');
        spriteBatch.drawText('0/10', new Vector2(215, 145), "12px Arial", 'white');
        spriteBatch.drawText('0/10', new Vector2(365, 145), "12px Arial", 'white');

        spriteBatch.drawTexture(HealthIncreaseAbility.icon, new Vector2(50, 200));
        spriteBatch.drawTexture(MeltingArrowAbility.icon, new Vector2(190, 200));
        spriteBatch.drawTexture(MultiShotAbility.icon, new Vector2(340, 200));

        spriteBatch.drawText('0/10', new Vector2(75, 295), "12px Arial", 'white');
        spriteBatch.drawText('0/10', new Vector2(215, 295), "12px Arial", 'white');
        spriteBatch.drawText('0/10', new Vector2(365, 295), "12px Arial", 'white');

        spriteBatch.drawTexture(SpeedIncreaseAbility.icon, new Vector2(50, 350));
        spriteBatch.drawTexture(MultiShotAbility.icon, new Vector2(190, 350));
        spriteBatch.drawTexture(MultiShotAbility.icon, new Vector2(340, 350));

        spriteBatch.drawText('0/10', new Vector2(75, 445), "12px Arial", 'white');
        spriteBatch.drawText('0/10', new Vector2(215, 445), "12px Arial", 'white');
        spriteBatch.drawText('0/10', new Vector2(365, 445), "12px Arial", 'white');
    }

    renderSelectedAbility(spriteBatch) {
        var iconLocation = new Vector2(50, 70);
        spriteBatch.drawTexture(this.selectedAbility.icon, iconLocation);
        spriteBatch.drawText(this.selectedAbility.spellName, new Vector2(145, 90), "24px Arial", 'white');

        for(var x = 0; x < this.selectedAbility.description.length; x++) {
            spriteBatch.drawText(this.selectedAbility.description[x], new Vector2(50, 180 + (x * 20)), "16px Arial", 'white');
        }
    }
}
