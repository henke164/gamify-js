class EnemyAnimator extends Animator {
    constructor(gameObject) {
        super(gameObject);

        this.setIdleAnimation(OrcAnimations.idleAnimation);
        this.setMovementAnimation(OrcAnimations.movementAnimation);
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

var OrcAnimations = {
    idleAnimation: [
        new Texture2D('images/enemies/1_ORK/IDLE/IDLE_000.png', null, 50),
        new Texture2D('images/enemies/1_ORK/IDLE/IDLE_001.png', null, 50),
        new Texture2D('images/enemies/1_ORK/IDLE/IDLE_002.png', null, 50),
        new Texture2D('images/enemies/1_ORK/IDLE/IDLE_003.png', null, 50),
        new Texture2D('images/enemies/1_ORK/IDLE/IDLE_004.png', null, 50),
        new Texture2D('images/enemies/1_ORK/IDLE/IDLE_005.png', null, 50),
        new Texture2D('images/enemies/1_ORK/IDLE/IDLE_006.png', null, 50)
    ],
    movementAnimation: [
        new Texture2D('images/enemies/1_ORK/RUN/RUN_000.png', null, 50),
        new Texture2D('images/enemies/1_ORK/RUN/RUN_001.png', null, 50),
        new Texture2D('images/enemies/1_ORK/RUN/RUN_002.png', null, 50),
        new Texture2D('images/enemies/1_ORK/RUN/RUN_003.png', null, 50),
        new Texture2D('images/enemies/1_ORK/RUN/RUN_004.png', null, 50),
        new Texture2D('images/enemies/1_ORK/RUN/RUN_005.png', null, 50),
        new Texture2D('images/enemies/1_ORK/RUN/RUN_006.png', null, 50)
    ],
}
