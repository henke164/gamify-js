class PlayerHandler {
    constructor() {
    }

    initializePlayer() {
        Player.abilities = [
            { id: 1, level: 99 }
        ];
    }

    // Todo, handle on server
    onLevelFinished(gameState, difficulty, enemiesDestroyed, summaryCallback) {
        if (gameState == GAME_STATE_LOST) {
            summaryCallback({
                gameState
            });
            return false;
        }

        var exp = Math.floor(enemiesDestroyed * (NumberProvider.getBaseNumberForLevel(difficulty) / 5));
        var ap = 1;

        var summary = {
            gameState,
            fromExperience: Player.experience,
            experience: exp,
            abilityPoints: 0,
            fromLevel: Player.level
        };

        console.log('Got ' + exp + ' exp');

        for (var x = 0; x < exp; x++) {
            Player.experience++;
            if (Player.experience >= Player.requiredExperience) {
                Player.experience = 0;
                Player.level++;
                Player.initializeBaseStats();
                Player.requiredExperience = NumberProvider.getBaseNumberForLevel(Player.level) *
                    NumberProvider.getBaseNumberForLevel(Player.level) * 2;

                Player.abilityPoints += ap;
            }
        }

        Player.selectedDifficulty++;

        if (Player.completedLevels.indexOf(difficulty) == -1) {
            Player.completedLevels.push(difficulty);
        }

        summary.toLevel = Player.level;
        Player.completedLevels.sort(sortNumberDesc);
        console.log(Player);
        summaryCallback(summary);
    }
}
