class AbilityPartialScene {
    constructor(parent) {
        this.parent = parent;
        this.position = parent.position;
        this.background = new Texture2D('assets/transparent.png', Game.screenSize.width, Game.screenSize.height);
        this.smallPanel = new Texture2D('assets/panel.png', Game.screenSize.width - 20);
        this.initializeBackButton();
        this.initializeUpgradeButton();
    }

    setSelectedAbility(ability) {
        this.selectedAbility = ability;
        this.upgradeButton.onClick = function() {
            this.upgradeStatusText = this.parent.abilityHandler.increaseAbilityLevel(ability.id);
            this.parent.initializeAbilityTree();
            setTimeout(function() {
                this.upgradeStatusText = null;
            }, 5000);
        }.bind(this);
    }

    initializeBackButton() {
        this.backToTreeButton = new Button(Textures['buttons.close']);
        this.backToTreeButton.onClick = () => {
            this.parent.selectedAbility = null;
        };
        this.backToTreeButton.position = new Vector2(
            Game.screenSize.width - 50, this.parent.position.y);
    }

    initializeUpgradeButton() {
        this.upgradeButton = new Button();
        this.upgradeButton.text = "Upgrade";
        this.upgradeButton.position = new Vector2(
            Game.screenSize.width - 250,
            this.position.y + 270);
    }

    update() {
        this.upgradeButton.update();
        this.backToTreeButton.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        spriteBatch.drawTexture(this.smallPanel, new Vector2(this.position.x + 10, this.position.y + 10));
        this.renderSelectedAbility(spriteBatch);
    }

    renderSelectedAbility(spriteBatch) {
        var iconLocation = new Vector2(this.position.x + 40, this.position.y + 50);
        spriteBatch.drawTexture(this.selectedAbility.icon, iconLocation);
        spriteBatch.drawText(this.selectedAbility.spellName, new Vector2(this.position.x + 185, this.position.y + 85), "24px HVD", 'Black');
        spriteBatch.drawText(this.selectedAbility.description, new Vector2(this.position.x + 185, this.position.y + 115), "16px HVD", 'Black', 190);

        if (this.upgradeStatusText) {
            spriteBatch.drawText(this.upgradeStatusText, new Vector2(this.position.x + 185, this.position.y + 185), "12px HVD", 'Green', 190);
        }

        this.upgradeButton.render(spriteBatch);
        this.backToTreeButton.render(spriteBatch);
    }
}
