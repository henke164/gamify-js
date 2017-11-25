class Monster extends Sprite {
    constructor() {
        super();
        this.healthBar = new HealthBar();
        this.animator = new EnemyAnimator(this);
        this.texture = this.animator.idleAnimation[0];
        this.onAttack = () => {};
        this.frozen = false;
    }

    setHealth(health) {
        this.startHealth = health;
        this.currentHealth = health;
    }

    update() {
        this.healthBar.position = new Vector2(this.position.x, this.position.y - 30);
        this.animator.update();

        if (this.position.y > Game.screenSize.height) {
            this.onAttack();
            this.shouldDestroy = true;
        }

        super.update();
    }
    
    reduceHealth(amount) {
        if (this.shouldDestroy) {
            return;
        }

        this.currentHealth -= amount;
        this.healthBar.texture.width = (this.currentHealth / this.startHealth) * 50;

        if (this.currentHealth <= 0) {
            this.destroy();
        }
    }

    render(spriteBatch) {
        this.healthBar.render(spriteBatch);
        super.render(spriteBatch);
    }
}
