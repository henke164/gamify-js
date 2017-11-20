class EnemyAnimator extends Animator {
    constructor(gameObject) {
        super(gameObject);

        var idlePath = 'images/enemies/1_ORK/IDLE/IDLE_';
        this.setIdleAnimation([
            new Texture2D(idlePath + '000.png', null, 10)
        ]);

        var movementPath = 'images/enemies/1_ORK/RUN/RUN_';
        this.setMovementAnimation([
            new Texture2D(idlePath + '000.png', null, 10),
            new Texture2D(idlePath + '001.png', null, 10),
            new Texture2D(idlePath + '002.png', null, 10),
            new Texture2D(idlePath + '003.png', null, 10),
            new Texture2D(idlePath + '004.png', null, 10),
            new Texture2D(idlePath + '005.png', null, 10),
            new Texture2D(idlePath + '006.png', null, 10)
        ]);
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
