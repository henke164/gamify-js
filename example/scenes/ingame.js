class InGameScene {
    constructor(game, level) {
        this.enemyActor = new EnemyActor(level);
        this.abilityActor = new AbilityActor(this);
        this.bowActor = new BowActor(this.abilityActor.onShoot);
        this.score = 0;
        this.scoreLabel = new Label('Score: ' + this.score, new Vector2(50, 50), 'white', '50px');
        this.background = new Texture2D('images/background.png', Game.screenSize.width, Game.screenSize.height);
    }

    update() {
        this.bowActor.update();
        this.enemyActor.update();
        this.abilityActor.update();
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);

        this.bowActor.renderBowAndArrows(spriteBatch);
        this.enemyActor.renderEnemies(spriteBatch);

        this.scoreLabel.render(spriteBatch);
    }
}
