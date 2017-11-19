class Monster extends Sprite {
    constructor() {
        super('images/enemies/1_ORK/IDLE/IDLE_000.png');
        this.startHealth = 100;
        this.currentHealth = 100;
        this.healthBar = new HealthBar();
        this.animator = new EnemyAnimator(this);
    }

    update() {
        this.healthBar.position = new Vector2(this.position.x, this.position.y - 40);
        this.animator.update();
        super.update();
    }

    reduceHealth(amount) {
        this.currentHealth -= amount;
        this.healthBar.texture.width = this.currentHealth;

        if (this.currentHealth <= 0) {
            this.shouldDestroy = true;
        }

        if (this.position.y > Game.screenSize.height) {
            this.shouldDestroy = true;
        }
    }

    render(ctx) {
        this.healthBar.render(ctx);
        super.render(ctx);
    }
}
