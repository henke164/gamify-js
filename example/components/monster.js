class Monster extends Sprite {
    constructor() {
        super();
        this.startHealth = 100;
        this.currentHealth = 100;
        this.healthBar = new HealthBar();
        this.animator = new EnemyAnimator(this);
        this.texture = this.animator.idleAnimation[0];
    }

    update() {
        this.healthBar.position = new Vector2(this.position.x, this.position.y - 30);
        this.animator.update();
        super.update();
    }

    reduceHealth(amount) {
        this.currentHealth -= amount;
        this.healthBar.texture.width = this.currentHealth / 2;

        if (this.currentHealth <= 0) {
            this.shouldDestroy = true;
        }

        if (this.position.y > Game.screenSize.height) {
            this.shouldDestroy = true;
        }
    }

    render(spriteBatch) {
        this.healthBar.render(spriteBatch);
        super.render(spriteBatch);
    }
}
