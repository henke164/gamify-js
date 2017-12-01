class AbilityHandler {
    constructor(game) {
        this.game = game;
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

    increaseAbilityLevel(abilityId) {
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
            console.log('pushing', ability);
            Player.abilities.push(ability);
        }

        if (ability.level >= 10) {
            return 'Max level reached.';
        }

        var cost = ability.level;

        if (cost == 0) {
            cost = 1;
        }

        if (cost > Player.abilityPoints) {
            return 'Not enough points.';
        }

        Player.abilityPoints -= cost;

        ability.level++;

        return 'Successfully upgraded ability with id "' + abilityId + '" to level ' + ability.level;
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
