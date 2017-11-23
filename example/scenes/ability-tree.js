class AbilityTreeScene {
    constructor(game) {
        this.background = new Texture2D('images/background.png', Game.screenSize.width, Game.screenSize.height);
        this.panel = new Texture2D('images/panel.png', Game.screenSize.width, Game.screenSize.height);
        this.selectedAbility = MultiShotAbility;

        this.backButton = new Button();
        this.backButton.text = 'Back';
        this.backButton.onClick = () => {
            game.openMenu();
        };

        this.upgradeButton = new Button();
        this.upgradeButton.text = 'Upgrade';
        this.upgradeButton.onClick = () => {
            for (var x = 0; x < Player.abilities.length; x++) {
                if (Player.abilities[x].type == this.selectedAbility) {
                    Player.abilities[x].level++;
                }
            }
            console.log(Player.abilities);
        };
    }

    update() {
        this.backButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.backButton.texture.width / 2),
            Game.screenSize.height - 200);

        this.backButton.update();

        this.upgradeButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.upgradeButton.texture.width / 2),
            Game.screenSize.height - 400);

        this.upgradeButton.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        spriteBatch.drawTexture(this.panel, Vector2.zero);

        if (this.selectedAbility) {
            this.renderSelectedAbility(spriteBatch);
        }

        this.upgradeButton.render(spriteBatch);
        this.backButton.render(spriteBatch);
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
