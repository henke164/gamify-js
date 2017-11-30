class PlayerHandler {
    constructor() {

    }

    // Todo, handle on server
    completeLevel(difficulty, enemiesDestroyed, summaryCallback) {
        var ap = Player.level % 2 == 0 ? 1 : 0;
        var exp = Math.floor(enemiesDestroyed * NumberProvider.getBaseNumberForLevel(difficulty));

        var summary = {
            experience: exp,
            abilityPoints: ap
        };

        console.log('Got ' + exp + ' exp');
        for(var x = 0; x < exp; x++){
            Player.experience + x;
            if (Player.experience >= Player.requiredExperience) {
                Player.experience = 0;
                Player.level++;
                Player.reInitializeBaseStats();
                Player.requiredExperience = NumberProvider.getBaseNumberForLevel(Player.level) * NumberProvider.getBaseNumberForLevel(Player.level) * 2;
                Player.abilityPoints += ap;
                if (difficulty > Player.maxReachedDifficulty) {
                    Player.maxReachedDifficulty = difficulty;
                }
            }
        }
        console.log(Player);

        summaryCallback(summary);
    }
}
