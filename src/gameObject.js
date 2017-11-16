class GameObject {
    constructor(game, texture) {
        this.game = game;
        this.rotation = 0;
        this.speed = 1;
        this.velocity = new Vector2(0, 0);
        this.position = new Vector2(0, 0);
        this.shouldDestroy = false;
        this.loadTexture(texture);
    }

    loadTexture(texture) {
        if(texture == null) {
            return;
        }

        this.texture = new Image();
        this.texture.src = texture;
        this.texture.width = 120;
        this.texture.height = 80;
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

    render(ctx) {
        if(this.texture == null) {
            return;
        }
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.drawImage(this.texture,
            -this.texture.width / 2,
            -this.texture.height / 2,
            this.texture.width,
            this.texture.height);
        ctx.restore();
    }
}
