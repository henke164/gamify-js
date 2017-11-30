class AbilityTreeScene {
    constructor(game) {
        this.position = new Vector2(0, 0);
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);
        this.panel = new Texture2D('assets/scroll.png', Game.screenSize.width);
        this.smallPanel = new Texture2D('assets/small-panel.png', Game.screenSize.width - 20);
        this.abilityHandler = new AbilityHandler();
        this.selectedAbility = null;

        this.backToMenuButton = new Button();
        this.backToMenuButton.text = 'Back';
        this.backToMenuButton.onClick = () => {
            game.openMenu();
        };

        this.backToTreeButton = new Button();
        this.backToTreeButton.text = 'Back';
        this.backToTreeButton.onClick = () => {
            this.selectedAbility = null;
        };

        this.upgradeButton = new Button();
        this.upgradeButton.text = "Upgrade";

        this.upgradeStatusLabel = new Label('', Vector2.zero, 'white', '14px', 'HVD');

        this.initializeAbilityTree = this.initializeAbilityTree.bind(this);

        this.initializeAbilityTree();
    }

    initializeAbilityTree() {
        this.abilityTree = [{
            ability: SpeedIncreaseAbility,
            position: new Vector2(this.position.x + 75, this.position.y + 125),
            button: new Button(SpeedIncreaseAbility.icon),
            level: this.abilityHandler.getAbility(SpeedIncreaseAbility).level
        },{
            ability: FireDotAbility,
            position: new Vector2(this.position.x + 205, this.position.y + 125),
            button: new Button(FireDotAbility.icon),
            level: this.abilityHandler.getAbility(FireDotAbility).level
        },{
            ability: FrostArrowAbility,
            position: new Vector2(this.position.x + 335, this.position.y + 125),
            button: new Button(FrostArrowAbility.icon),
            level: this.abilityHandler.getAbility(FrostArrowAbility).level
        },{
            ability: HealthIncreaseAbility,
            position: new Vector2(this.position.x + 75, this.position.y + 250),
            button: new Button(HealthIncreaseAbility.icon),
            level: this.abilityHandler.getAbility(HealthIncreaseAbility).level
        },{
            ability: MeltingArrowAbility,
            position: new Vector2(this.position.x + 205, this.position.y + 250),
            button: new Button(MeltingArrowAbility.icon),
            level: this.abilityHandler.getAbility(MeltingArrowAbility).level
        },{
            ability: FreezingArrowAbility,
            position: new Vector2(this.position.x + 335, this.position.y + 250),
            button: new Button(FreezingArrowAbility.icon),
            level: this.abilityHandler.getAbility(FreezingArrowAbility).level
        },/*{
            ability: SpeedIncreaseAbility,
            rectangle: new Rectangle(50, 350, 80, 80)
        },{
            ability: MultiShotAbility,
            rectangle: new Rectangle(190, 350, 80, 80)
        },*/{
            ability: MultiShotAbility,
            position: new Vector2(this.position.x + 335, this.position.y + 375),
            button: new Button(MultiShotAbility.icon),
            level: this.abilityHandler.getAbility(MultiShotAbility).level
        }];

        var parent = this;
        for (var x = 0; x < this.abilityTree.length; x++) {
            var ability = this.abilityTree[x];
            ability.button.onClick = function () {
                parent.selectedAbility = this.ability;
                parent.upgradeButton.onClick = function() {
                    parent.upgradeStatusLabel.text = parent.abilityHandler.increaseAbilityLevel(parent.selectedAbility);
                    parent.initializeAbilityTree();
                    setTimeout(function() {
                        parent.upgradeStatusLabel.text = '';
                    }, 2000);
                };
            }.bind(ability);
        }
    }

    update() {
        this.backToMenuButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.backToMenuButton.texture.width / 2),
            Game.screenSize.height - 200);

        for (var x = 0; x < this.abilityTree.length; x++) {
            this.abilityTree[x].button.update();
        }

        this.backToMenuButton.update();

        if (this.selectedAbility) {
            this.upgradeButton.position = new Vector2(
                (Game.screenSize.width / 2) - (this.upgradeButton.texture.width) - 5,
                Game.screenSize.height / 2 - 100);

            this.backToTreeButton.position = new Vector2(
                (Game.screenSize.width / 2) + 5,
                Game.screenSize.height / 2 - 100);

            this.upgradeButton.update();
            this.backToTreeButton.update();
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
        var iconLocation = new Vector2(50, 70);
        spriteBatch.drawTexture(this.selectedAbility.icon, iconLocation);
        spriteBatch.drawText(this.selectedAbility.spellName, new Vector2(145, 90), "24px HVD", 'white');

        for(var x = 0; x < this.selectedAbility.description.length; x++) {
            spriteBatch.drawText(this.selectedAbility.description[x], new Vector2(50, 180 + (x * 20)), "16px HVD", 'white');
        }

        if(this.upgradeStatusLabel.text !== '') {
            var size = spriteBatch.context.measureText(this.upgradeStatusLabel.text);

            this.upgradeStatusLabel.position = new Vector2(
                (Game.screenSize.width / 2) - (size.width / 2),
                Game.screenSize.height - 600);

            this.upgradeStatusLabel.render(spriteBatch);
        }

        this.upgradeButton.render(spriteBatch);
        this.backToTreeButton.render(spriteBatch);
    }
}
