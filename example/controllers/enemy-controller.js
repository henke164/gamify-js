class EnemyController {
    constructor(scene, difficulty, enemyCount, onPlayerAttacked) {
        this.scene = scene;
        this.difficulty = difficulty;
        this.enemies = new GameObjectArray();
        this.ticksUntilNextSpawn = 0;
        this.onPlayerAttacked = onPlayerAttacked;
        this.enemyCount = enemyCount;
        this.enemiesDestroyed = 0;
        this.setSpawnTime();
    }

    setSpawnTime() {
        var fps = 30;
        var halfMinuteInSeconds = 30;

        this.spawnTime = ((fps * halfMinuteInSeconds) / this.enemyCount);

        var twoSeconds = fps * 2;
        if (this.spawnTime > twoSeconds) {
            this.spawnTime = twoSeconds;
        }

        this.timer = 0;
    }

    update() {
        if (this.ticksUntilNextSpawn <= 0 && this.enemyCount > 0) {
            this.spawnEnemy();
            this.ticksUntilNextSpawn = this.spawnTime;
        }

        this.ticksUntilNextSpawn--;
        this.timer ++;
        if(this.timer >= 30) {
            this.timer = 0;
        }

        this.enemies.updateAll((idx, enemy) => {
            if (enemy.shouldDestroy) {
                this.enemiesDestroyed++;
            }
        });
    }

    renderEnemies(spriteBatch) {
        this.enemies.renderAll(spriteBatch);
    }

    spawnEnemy() {
        var monster = this.enemies.addGameObject(Monster);
        var rnd = monster.texture.width + (Math.random() * Game.screenSize.width - monster.texture.width);
        monster.position = new Vector2(rnd, 0);
        monster.velocity = new Vector2(0, 1)
        monster.speed = 4;
        var baseAmount = NumberProvider.getBaseNumberForLevel(this.difficulty);
        monster.setHealth(baseAmount * baseAmount * 5);
        monster.onAttack = () => {
            this.onPlayerAttacked();
        }
        this.enemyCount--;
    }
}
