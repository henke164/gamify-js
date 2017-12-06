var Player = (function(){
    var p = {};
    p.level = 1;
    p.experience = 0;
    p.requiredExperience = 6;
    p.abilityPoints = 10;
    p.abilities = [];
    p.selectedDifficulty = 1;
    p.completedLevels = [5, 3, 2, 1];

    p.initializeBaseStats = () => {
        baseStats = {
            health: NumberProvider.getBaseNumberForLevel(p.level) * 0.1,
            basePower: NumberProvider.getBaseNumberForLevel(p.level),
        };
    }

    p.getPower = () => {
        return baseStats.basePower;
    }

    p.getHealth = () => {
        return baseStats.health;
    }

    p.initializeBaseStats();

    return p;
})();
