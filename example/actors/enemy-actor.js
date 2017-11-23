class EnemyActor {
    constructor(level) {
        this.statsProvider = new StatsProvider(level);
        this.enemies = new GameObjectArray();
        this.ticksUntilNextSpawn = 0;
        this.level = level;
    }

    update() {
        if (this.ticksUntilNextSpawn <= 0) {
            this.spawnMonster();
            this.ticksUntilNextSpawn = this.statsProvider.getRandomDecreasingNumber(10);
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
    }
}
