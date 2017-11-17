class Monster extends GameObject {
    constructor() {
        super("images/monster.png");
        this.startHealth = 100;
        this.currentHealth = 100;
        this.healthBar = new HealthBar();
    }

    update() {
        this.healthBar.position = new Vector2(this.position.x, this.position.y - 40);
        super.update();
    }

    reduceHealth(amount) {
        this.currentHealth -= amount;
        this.healthBar.texture.width = this.currentHealth;

        if (this.currentHealth <= 0) {
            this.shouldDestroy = true;
        }
    }

    render(ctx) {
        this.healthBar.render(ctx);
        super.render(ctx);
    }
}
