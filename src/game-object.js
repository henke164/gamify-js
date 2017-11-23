class GameObject {
    constructor() {
        this.rotation = 0;
        this.speed = 1;
        this.velocity = new Vector2(0, 0);
        this.position = new Vector2(0, 0);
        this.shouldDestroy = false;
        this.onDestroyed = undefined;
    }

    update() {
        if (this.velocity.x != 0) {
            this.position.x += this.velocity.x * this.speed;
        }
        if (this.velocity.y != 0) {
            this.position.y += this.velocity.y * this.speed;
        }
    }

    faceTowards(vector2, cornerToFace) {
        var angle = Math.atan2(vector2.y - this.position.y,
            vector2.x - this.position.x);

        var degrees = 180 * angle / Math.PI;
        this.rotation = cornerToFace + (360 + Math.round(degrees)) % 360;
    }

    destroy() {
        this.shouldDestroy = true;

        if(this.onDestroyed) {
            this.onDestroyed();
        }
    }

    render(spriteBatch) {}
}
