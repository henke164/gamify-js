class EnemyController {
    constructor(difficulty, enemyCount, onPlayerAttacked) {
        this.statsProvider = new StatsProvider(difficulty);
        this.enemies = new GameObjectArray();
        this.ticksUntilNextSpawn = 0;
        this.onPlayerAttacked = onPlayerAttacked;
        this.setSpawnTime(enemyCount);
    }

    setSpawnTime(totalCount) {
        var fps = 30;
        var halfMinuteInSeconds = 30;

        this.spawnTime = ((fps * halfMinuteInSeconds) / totalCount);

        var fiveSeconds = fps * 5;
        if (this.spawnTime > fiveSeconds) {
            this.spawnTime = fiveSeconds;
        }
        this.timer = 0;
    }
    update() {
        if (this.ticksUntilNextSpawn <= 0) {
            this.spawnEnemy();
            this.ticksUntilNextSpawn = this.spawnTime;
        }
        this.ticksUntilNextSpawn--;
        this.timer ++;
        if(this.timer >= 30) {
            console.log('time');
            this.timer = 0;
        }
        this.enemies.updateAll();
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
        monster.setHealth(this.statsProvider.getBaseValue() * this.statsProvider.getBaseValue() * 5);
        console.log(monster.currentHealth);
        monster.onAttack = () => {
            this.onPlayerAttacked();
        }
    }
}
