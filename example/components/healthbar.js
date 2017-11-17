class HealthBar extends GameObject {
    constructor(game) {
        super(game, "images/healthbar.png");
        this.texture.height = 3;
        this.texture.width = 100;
    }

    render(ctx) {
        super.render(ctx);
    }
}
