class AbilityHandler {
    constructor() {
    }

    static getAbilityTypes() {
        return [
            DefaultAbility,
            SpeedIncreaseAbility,
            FireDotAbility,
            MeltingArrowAbility,
            FreezingArrowAbility,
            FrostArrowAbility,
            MultiShotAbility,
            HealthIncreaseAbility
        ];
    }

    increaseAbilityLevel(abilityId, result) {
        var ability = null;

        for(var x = 0; x < Player.abilities.length; x++) {
            if (Player.abilities[x].id == abilityId) {
                ability = Player.abilities[x];
            }
        }

        if (!ability) {
            ability = {
                id: abilityId,
                level: 0
            };
            Player.abilities.push(ability);
        }

        if (ability.level >= 10) {
            return {
                successful: false,
                message: 'Max level reached.'
            }
        }

        var cost = ability.level;

        if (cost == 0) {
            cost = 1;
        }

        if (cost > Player.abilityPoints) {
            return {
                successful: false,
                message: 'Not enough points.'
            }
        }

        Player.abilityPoints -= cost;

        ability.level++;

        return {
            successful: true,
            message: 'Successfully upgraded ability with id "' + abilityId + '" to level ' + ability.level
        }
    }

    getPlayerAbilityLevelById(abilityId) {
        for(var x = 0; x < Player.abilities.length; x++) {
            if (Player.abilities[x].id == abilityId) {
                return Player.abilities[x].level;
            }
        }

        console.log('Error: Could not find ability with id "' + abilityId + '"');
        return 0;
    }
}
