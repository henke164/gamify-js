class AbilityHandler {
    constructor() {

    }

    loadAbilities() {
        Player.abilities = [{
            type: DefaultAbility,
            level: 99
        }, {
            type: SpeedIncreaseAbility,
            level: 0
        }, {
            type: FireDotAbility,
            level: 3
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
            return 'Ability could not be found.';
        }

        if (ability.level >= 10) {
            return 'Max level reached.';
        }

        var cost = ability.level;

        if (cost > Player.abilityPoints) {
            return 'Not enough points.';
        }

        Player.abilityPoints -= cost;

        ability.level++;

        return 'Successfully upgraded ' + abilityType.spellName + ' to level ' + ability.level;
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
