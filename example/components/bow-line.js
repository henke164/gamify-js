class BowLine extends GameObject {
    constructor(bow) {
        super("images/bowline.png");
        this.bow = bow;

        this.texture.height = 60;
        this.position = new Vector2(this.bow.position.x, this.bow.position.y);
    }

    update(dragDistance) {
        this.rotation = this.bow.rotation;

        this.position.y = this.bow.position.y - (dragDistance * 0.5);
        this.texture.height = dragDistance * 10;
        if(this.texture.height > 600) {
            this.texture.height = 600;
            this.position.y = this.bow.position.y - 27;
        }
    }

    render(ctx) {
        super.render(ctx);
    }
}
