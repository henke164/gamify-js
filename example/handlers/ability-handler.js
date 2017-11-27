class AbilityHandler {
    constructor() {

    }

    loadAbilities() {
        Player.abilities = [{
            type: SpeedIncreaseAbility,
            level: 0
        }, {
            type: FireDotAbility,
            level: 0
        }, {
            type: MeltingArrowAbility,
            level: 0
        }, {
            type: FreezingArrowAbility,
            level: 0,
        }, {
            type: FrostArrowAbility,
            level: 0
        }, {
            type: MultiShotAbility,
            level: 0
        }, {
            type: HealthIncreaseAbility,
            level: 0
        }];
    }

    increaseAbilityLevel(abilityType) {
        var ability = this.getAbility(abilityType);
        if (!ability) {
            return;
        }

        if (ability.level >= 10) {
            return;
        }
        ability.level++;
        console.log(ability);
    }

    getAbility(abilityType) {
        if(!abilityType instanceof BaseAbility) {
            console.log('Error: "' + abilityType + '" is not an ability.');
            return;
        }

        for(var x = 0; x < Player.abilities.length; x++) {
            if (Player.abilities[x].type == abilityType) {
                return Player.abilities[x];
            }
        }

        console.log('Error: Could not find ability "' + abilityType + '"');
    }
}
