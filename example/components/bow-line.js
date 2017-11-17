class BowLine extends GameObject {
    constructor(bow) {
        super("images/bowline.png");
        this.bow = bow;
        this.reset();
    }

    update(extend) {
        this.rotation = this.bow.rotation;

        if(extend && this.texture.height < 400) {
            this.texture.height += 5;
            this.position.y -= 0.2;
        }
    }

    reset() {
        this.texture.height = 60;
        this.position = new Vector2(this.bow.position.x, this.bow.position.y);
    }

    render(ctx) {
        super.render(ctx);
    }
}
