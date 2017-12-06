class Button extends Sprite {
    constructor(texture = Textures['buttons.default']) {
        super(texture);
        this.text = '';
        this.onClick = () => {};
        this.font = '30px HVD';
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
        
        if (this.texture.loaded && this.text !== '') {
            this.textPos = new Vector2(
                this.position.x + (this.texture.width / 2) - (textSize.width / 2),
                this.position.y + (this.texture.height / 2) + 3);
        } else {
            spriteBatch.drawText(this.text,
                Vector2.zero,
                this.font,
                this.color);
            return;
        }

        if (this.textPos === null) {
            return;
        }

        spriteBatch.drawText(this.text,
            this.textPos,
            this.font,
            this.color);
    }
}
