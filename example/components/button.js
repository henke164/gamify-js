class Button extends Sprite {
    constructor() {
        super(new Texture2D('images/button.png', 220, 75));
        this.text = '';
        this.onClick = () => {};
        this.font = '30px Arial';
        this.color = 'white';
        this.mouseDown = false;
    }

    update() {
        var rectangle = new Rectangle(this.position.x, this.position.y, this.texture.width, this.texture.height);

        var mouseState = Game.input.mouseState;

        if (mouseState.leftButtonDown && !this.mouseDown) {
            this.mouseDown = true;
        }

        if (!mouseState.leftButtonDown && this.mouseDown) {
            if (rectangle.embraces(mouseState.position)) {
                this.onClick();
            }
            this.mouseDown = false;
        }
    }

    render(spriteBatch) {
        spriteBatch.drawTexture(this.texture, this.position);

        var textSize = spriteBatch.context.measureText(this.text);
        spriteBatch.drawText(this.text,
            new Vector2(
                this.position.x + (this.texture.width / 2) - (textSize.width / 2),
                this.position.y + (this.texture.height / 2) + 8),
            this.font,
            this.color);
    }
}
