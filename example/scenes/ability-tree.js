class AbilityTreeScene {
    constructor(game) {
        this.background = new Texture2D('images/background.png', Game.screenSize.width, Game.screenSize.height);
        this.panel = new Texture2D('images/panel.png', Game.screenSize.width);
        this.abilityHandler = new AbilityHandler();
        this.selectedAbility = null;

        this.backButton = new Button();
        this.backButton.text = 'Back';
        this.backButton.onClick = () => {
            game.openMenu();
        };

        this.initializeAbilityTree();
    }

    initializeAbilityTree() {
        this.abilityTree = [{
            ability: SpeedIncreaseAbility,
            position: new Vector2(50, 50),
            button: new Button(SpeedIncreaseAbility.icon),
            level: this.abilityHandler.getAbility(SpeedIncreaseAbility).level
        },{
            ability: FireDotAbility,
            position: new Vector2(190, 50),
            button: new Button(FireDotAbility.icon),
            level: this.abilityHandler.getAbility(FireDotAbility).level
        },{
            ability: FrostArrowAbility,
            position: new Vector2(340, 50),
            button: new Button(FrostArrowAbility.icon),
            level: this.abilityHandler.getAbility(FrostArrowAbility).level
        },{
            ability: HealthIncreaseAbility,
            position: new Vector2(50, 200),
            button: new Button(HealthIncreaseAbility.icon),
            level: this.abilityHandler.getAbility(HealthIncreaseAbility).level
        },{
            ability: MeltingArrowAbility,
            position: new Vector2(190, 200),
            button: new Button(MeltingArrowAbility.icon),
            level: this.abilityHandler.getAbility(MeltingArrowAbility).level
        },{
            ability: FreezingArrowAbility,
            position: new Vector2(340, 200),
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
            position: new Vector2(340, 350),
            button: new Button(MultiShotAbility.icon),
            level: this.abilityHandler.getAbility(MultiShotAbility).level
        }];

        var parent = this;
        for (var x = 0; x < this.abilityTree.length; x++) {
            var ability = this.abilityTree[x];
            ability.button.onClick = function() {
                parent.abilityHandler.increaseAbilityLevel(this.ability);
                parent.initializeAbilityTree();
            }.bind(ability);
        }
    }

    update() {
        this.backButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.backButton.texture.width / 2),
            Game.screenSize.height - 200);

        for (var x = 0; x < this.abilityTree.length; x++) {
            this.abilityTree[x].button.update();
        }

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
        for(var x = 0; x < this.abilityTree.length; x++) {
            var ability = this.abilityTree[x];
            ability.button.position = ability.position;
            ability.button.render(spriteBatch);
            spriteBatch.drawText(ability.level + '/10', new Vector2(ability.position.x + 25,
                ability.position.y + 95), "12px Arial", 'white');
        }
    }

    renderSelectedAbility(spriteBatch) {
        var iconLocation = new Vector2(50, 70);
        spriteBatch.drawTexture(this.selectedAbility.ability.icon, iconLocation);
        spriteBatch.drawText(this.selectedAbility.ability.spellName, new Vector2(145, 90), "24px Arial", 'white');

        for(var x = 0; x < this.selectedAbility.description.length; x++) {
            spriteBatch.drawText(this.selectedAbility.description[x], new Vector2(50, 180 + (x * 20)), "16px Arial", 'white');
        }
    }
}
