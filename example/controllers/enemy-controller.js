class EnemyController {
    constructor(level, enemyCount, onPlayerAttacked) {
        this.statsProvider = new StatsProvider(level);
        this.enemies = new GameObjectArray();
        this.ticksUntilNextSpawn = 0;
        this.level = level;
        this.enemyCount = enemyCount;
        this.wave = 0;
        this.enemiesDestroyed = 0;
        this.onPlayerAttacked = onPlayerAttacked;
    }

    update() {
        if (this.ticksUntilNextSpawn <= 0 && this.enemyCount > this.wave) {
            this.spawnMonster();
            this.ticksUntilNextSpawn = this.statsProvider.getRandomDecreasingNumber(10);
            this.wave++;
        }
        this.ticksUntilNextSpawn--;
        this.enemies.updateAll();
    }

    renderEnemies(spriteBatch) {
        this.enemies.renderAll(spriteBatch);
    }

    spawnMonster() {
        var monster = this.enemies.addGameObject(Monster);
        var rnd = monster.texture.width + (Math.random() * Game.screenSize.width - monster.texture.width);
        monster.position = new Vector2(rnd, 0);
        monster.velocity = new Vector2(0, 1)
        monster.speed = 4;
        monster.setHealth(this.statsProvider.getBaseValue());
        monster.onDestroyed = () => {
            this.enemiesDestroyed++;
        };
        monster.onAttack = () => {
            this.onPlayerAttacked();
        }
    }
}
