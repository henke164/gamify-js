class EnemyAnimator extends Animator {
    constructor(gameObject) {
        super(gameObject);

        this.setIdleAnimation(Textures['orcAnimations.idleAnimation']);
        this.setMovementAnimation(Textures['orcAnimations.movementAnimation']);
    }

    update() {
        if(this.gameObject.velocity == Vector2.zero) {
            this.currentAnimation = this.idleAnimation;
        } else {
            this.currentAnimation = this.movementAnimation;
        }
        super.update();
    }
}
