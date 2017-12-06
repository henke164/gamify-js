class PlayerHandler {
    constructor() {
    }

    initializePlayer() {
        Player.abilities = [
            { id: 1, level: 99 },
            { id: 2, level: 3 },
            { id: 5, level: 9 }
        ];

        console.log(Player.abilities);
    }

    // Todo, handle on server
    completeLevel(difficulty, enemiesDestroyed, summaryCallback) {
        var ap = Player.level % 2 == 0 ? 1 : 0;
        var exp = Math.floor(enemiesDestroyed * (NumberProvider.getBaseNumberForLevel(difficulty) / 5));

        var summary = {
            experience: exp,
            abilityPoints: ap
        };

        console.log('Got ' + exp + ' exp');
        for(var x = 0; x < exp; x++){
            Player.experience ++;
            if (Player.experience >= Player.requiredExperience) {
                Player.experience = 0;
                Player.level++;
                Player.initializeBaseStats();
                Player.requiredExperience = NumberProvider.getBaseNumberForLevel(Player.level) * NumberProvider.getBaseNumberForLevel(Player.level) * 2;
                Player.abilityPoints += ap;
            }
        }
        Player.selectedDifficulty++;
        
        if (Player.completedLevels.indexOf(difficulty) == -1) {
            Player.completedLevels.push(difficulty);
        }
        Player.completedLevels.reverse();
        console.log(Player);

        summaryCallback(summary);
    }
}
