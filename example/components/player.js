var Player = (function(){
    var p = {};
    p.level = 10;
    p.abilityPoints = 0;
    p.abilities = []
    var baseStatsProvider = new StatsProvider(p.level);
    var baseStats = {
        health: baseStatsProvider.getBaseValue() * 0.1,
        basePower: baseStatsProvider.getBaseValue(),
    };

    p.getPower = function() {
        return baseStats.basePower;
    }

    p.getHealth = function() {
        console.log(baseStats.health);
        return baseStats.health *999999999999;
    }

    return p;
})();
//level = constant * sqrt(XP)
