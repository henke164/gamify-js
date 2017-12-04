class AbilityTreeScene {
    constructor(game) {
        this.position = new Vector2(0, 0);
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);
        this.panel = new Texture2D('assets/scroll.png', Game.screenSize.width);
        this.smallPanel = new Texture2D('assets/panel.png', Game.screenSize.width - 20);
        this.abilityHandler = new AbilityHandler(game);
        this.selectedAbility = null;

        this.backToMenuButton = new Button();
        this.backToMenuButton.text = 'Back';
        this.backToMenuButton.onClick = () => {
            game.openMenu();
        };

        this.initializeAbilityTree = this.initializeAbilityTree.bind(this);

        this.initializeBackButton();
        this.initializeUpgradeButton();
        this.initializeAbilityTree();
    }

    initializeBackButton() {
        this.backToTreeButton = new Button(Textures['buttons.close']);
        this.backToTreeButton.onClick = () => {
            this.selectedAbility = null;
        };
        this.backToTreeButton.position = new Vector2(
            Game.screenSize.width - 50, this.position.y);
    }

    initializeUpgradeButton() {
        this.upgradeButton = new Button();
        this.upgradeButton.text = "Upgrade";
        this.upgradeButton.position = new Vector2(
            Game.screenSize.width - 250,
            this.position.y + 270);
    }

    initializeAbilityTree() {
        this.abilityTree = [{
            ability: SpeedIncreaseAbility,
            position: new Vector2(this.position.x + 75, this.position.y + 125),
            button: new Button(SpeedIncreaseAbility.icon),
            level: this.abilityHandler.getPlayerAbilityLevelById(SpeedIncreaseAbility.id)
        },{
            ability: FireDotAbility,
            position: new Vector2(this.position.x + 205, this.position.y + 125),
            button: new Button(FireDotAbility.icon),
            level: this.abilityHandler.getPlayerAbilityLevelById(FireDotAbility.id)
        },{
            ability: FrostArrowAbility,
            position: new Vector2(this.position.x + 335, this.position.y + 125),
            button: new Button(FrostArrowAbility.icon),
            level: this.abilityHandler.getPlayerAbilityLevelById(FrostArrowAbility.id)
        },{
            ability: HealthIncreaseAbility,
            position: new Vector2(this.position.x + 75, this.position.y + 250),
            button: new Button(HealthIncreaseAbility.icon),
            level: this.abilityHandler.getPlayerAbilityLevelById(HealthIncreaseAbility.id)
        },{
            ability: MeltingArrowAbility,
            position: new Vector2(this.position.x + 205, this.position.y + 250),
            button: new Button(MeltingArrowAbility.icon),
            level: this.abilityHandler.getPlayerAbilityLevelById(MeltingArrowAbility.id)
        },{
            ability: FreezingArrowAbility,
            position: new Vector2(this.position.x + 335, this.position.y + 250),
            button: new Button(FreezingArrowAbility.icon),
            level: this.abilityHandler.getPlayerAbilityLevelById(FreezingArrowAbility.id)
        },{
            ability: MultiShotAbility,
            position: new Vector2(this.position.x + 335, this.position.y + 375),
            button: new Button(MultiShotAbility.icon),
            level: this.abilityHandler.getPlayerAbilityLevelById(MultiShotAbility.id)
        }];

        var parent = this;
        for (var x = 0; x < this.abilityTree.length; x++) {
            var ability = this.abilityTree[x];
            ability.button.onClick = function () {
                parent.selectedAbility = {
                    id: this.ability.id,
                    icon: this.ability.icon,
                    spellName: this.ability.spellName,
                    description: this.ability.description
                };

                parent.upgradeButton.onClick = function() {
                    parent.upgradeStatusText = parent.abilityHandler.increaseAbilityLevel(parent.selectedAbility.id);
                    parent.initializeAbilityTree();
                    setTimeout(function() {
                        parent.upgradeStatusText = null;
                    }, 5000);
                };
            }.bind(ability);
        }
    }

    update() {
        this.backToMenuButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.backToMenuButton.texture.width / 2),
            Game.screenSize.height - 200);

        if (this.selectedAbility) {
            this.upgradeButton.update();
            this.backToTreeButton.update();
        } else {
            for (var x = 0; x < this.abilityTree.length; x++) {
                this.abilityTree[x].button.update();
            }

            this.backToMenuButton.update();
        }
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        spriteBatch.drawTexture(this.panel, Vector2.zero);
        this.renderGeneralTree(spriteBatch);
        if (this.selectedAbility) {
            spriteBatch.drawTexture(this.smallPanel, new Vector2(10, 10));
            this.renderSelectedAbility(spriteBatch);
        }
    }

    renderGeneralTree(spriteBatch) {
        for(var x = 0; x < this.abilityTree.length; x++) {
            var ability = this.abilityTree[x];
            ability.button.position = ability.position;
            ability.button.render(spriteBatch);

            if (ability.level === 0) {
                continue;
            }
            var abilityLevelLabelWrapperPos = new Vector2(
                ability.position.x + 15,
                ability.position.y + 80);

            var abilityLevelLabelPos = new Vector2(
                abilityLevelLabelWrapperPos.x + 20,
                abilityLevelLabelWrapperPos.y + 17);

            spriteBatch.drawTexture(Textures['labels.red'], abilityLevelLabelWrapperPos);
            spriteBatch.drawText(ability.level, abilityLevelLabelPos, "14px HVD", '#fff');
        }

        this.backToMenuButton.render(spriteBatch);
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
