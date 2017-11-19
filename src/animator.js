class Animator {
    constructor(gameObject) {
        this.gameObject = gameObject;
        this.frame = 0;

        this.idleAnimation = [];
        this.movementAnimation = [];
        this.damageAnimation = [];
        this.deathAnimation = [];
    }

    setIdleAnimation(animation) {
        this._addAnimationsToArray(animation, this.idleAnimation);
    }

    setMovementAnimation(animation) {
        this._addAnimationsToArray(animation, this.movementAnimation);
    }
    
    setDamageAnimation(animation) {
        this._addAnimationsToArray(animation, this.damageAnimation);
    }

    setDeathAnimation(animation) {
        this._addAnimationsToArray(animation, this.deathAnimation);
    }

    _addAnimationsToArray(animations, array) {
        animations.forEach(item => {
            var img = new Image;
            img.src = item;
            img.width = this.gameObject.texture.width;
            img.height = this.gameObject.texture.height;
            array.push(img);
        });
    }

    update() {
        if(this.currentAnimation == null) {
            return;
        }
        var frame = Math.floor(this.frame);
        this.gameObject.texture = this.currentAnimation[frame];
        this.frame += 0.5;
        if(this.frame >= this.currentAnimation.length) {
            this.frame = 0;
        }
    }
}