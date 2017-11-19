class EnemyAnimator extends Animator {
    constructor(gameObject) {
        super(gameObject);
        this.setIdleAnimation(['images/enemies/1_ORK/IDLE/IDLE_000.png']);
        this.setMovementAnimation([
            'images/enemies/1_ORK/RUN/RUN_000.png', 
            'images/enemies/1_ORK/RUN/RUN_001.png', 
            'images/enemies/1_ORK/RUN/RUN_002.png', 
            'images/enemies/1_ORK/RUN/RUN_003.png', 
            'images/enemies/1_ORK/RUN/RUN_004.png', 
            'images/enemies/1_ORK/RUN/RUN_005.png', 
            'images/enemies/1_ORK/RUN/RUN_006.png']);
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