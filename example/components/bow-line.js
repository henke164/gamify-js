class BowLine extends Sprite {
    constructor(bow) {
        super(new Texture2D("images/bowline.png"));
        this.bow = bow;

        this.texture.height = 60;
        this.position = new Vector2(this.bow.position.x, this.bow.position.y);
    }

    update(pullDistance) {
        this.rotation = this.bow.rotation;

        this.position.y = this.bow.position.y - (pullDistance * 0.5);
        this.texture.height = pullDistance * 10;
        if(this.texture.height > 600) {
            this.texture.height = 600;
            this.position.y = this.bow.position.y - 27;
        }
    }
}
