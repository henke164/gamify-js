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

        this.abilityTree = [{
            ability: SpeedIncreaseAbility,
            position: new Vector2(50, 50),
            button: new Button(SpeedIncreaseAbility.icon)
        },{
            ability: FireDotAbility,
            position: new Vector2(190, 50),
            button: new Button(FireDotAbility.icon)
        },{
            ability: FrostArrowAbility,
            position: new Vector2(340, 50),
            button: new Button(FrostArrowAbility.icon)
        },{
            ability: HealthIncreaseAbility,
            position: new Vector2(50, 200),
            button: new Button(HealthIncreaseAbility.icon)
        },{
            ability: MeltingArrowAbility,
            position: new Vector2(190, 200),
            button: new Button(MeltingArrowAbility.icon)
        },{
            ability: MeltingArrowAbility,
            position: new Vector2(340, 200),
            button: new Button(MeltingArrowAbility.icon)
        },/*{
            ability: SpeedIncreaseAbility,
            rectangle: new Rectangle(50, 350, 80, 80)
        },{
            ability: MultiShotAbility,
            rectangle: new Rectangle(190, 350, 80, 80)
        },*/{
            ability: MultiShotAbility,
            position: new Vector2(340, 350),
            button: new Button(MeltingArrowAbility.icon)
        }];
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
            var a = this.abilityTree[x];
            a.button.position = a.position;
            a.button.render(spriteBatch);
            a.button.onClick = () => {
                console.log(a.ability.spellName);
            };
            spriteBatch.drawText('0/10', new Vector2(a.position.x + 25, a.position.y + 95), "12px Arial", 'white');
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
