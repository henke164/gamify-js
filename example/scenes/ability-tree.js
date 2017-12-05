class AbilityTreeScene {
    constructor(game) {
        this.position = new Vector2(0, 50);
        this.background = new Texture2D('assets/background.png', Game.screenSize.width, Game.screenSize.height);
        this.panel = new Texture2D('assets/scroll.png', Game.screenSize.width);
        this.abilityHandler = new AbilityHandler();
        this.selectedAbility = null;

        this.backToMenuButton = new Button();
        this.backToMenuButton.text = 'Back';
        this.backToMenuButton.onClick = () => {
            game.openMenu();
        };

        this.initializeAbilityTree = this.initializeAbilityTree.bind(this);

        this.abilityPartial = new AbilityPartialScene(this);

        this.initializeAbilityTree();
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
            var abilityHandler = this.abilityHandler;

            ability.button.onClick = function () {
                parent.selectedAbility = {
                    id: this.ability.id,
                    icon: this.ability.icon,
                    spellName: this.ability.spellName,
                    description: this.ability.description,
                    level: abilityHandler.getPlayerAbilityLevelById(this.ability.id),
                };

                parent.abilityPartial.setSelectedAbility(parent.selectedAbility);
            }.bind(ability);
        }
    }

    update() {
        this.backToMenuButton.position = new Vector2(
            (Game.screenSize.width / 2) - (this.backToMenuButton.texture.width / 2),
            Game.screenSize.height - 200);

        if (this.selectedAbility) {
            this.abilityPartial.update();
        } else {
            for (var x = 0; x < this.abilityTree.length; x++) {
                this.abilityTree[x].button.update();
            }

            this.backToMenuButton.update();
        }
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        spriteBatch.drawTexture(this.panel, this.position);
        this.renderGeneralTree(spriteBatch);
        if (this.selectedAbility) {
            this.abilityPartial.render(spriteBatch);
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
}
