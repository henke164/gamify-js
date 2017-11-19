class Sprite extends GameObject {
    constructor(texture) {
        super();
        this.loadTexture(texture);
    }
    
    loadTexture(texture) {
        if(texture == null) {
            return;
        }

        this.texture = new Image();
        this.texture.src = texture;
        this.texture.width = 120;
        this.texture.height = 101;
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
        super.render(ctx);
    }
}