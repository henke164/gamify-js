class Sprite extends GameObject {
    constructor(texture) {
        super();

        this.texture = texture;
    }

    render(spriteBatch) {
        spriteBatch.drawRotatedTexture(this.texture, this.position, this.rotation);
    }
}
