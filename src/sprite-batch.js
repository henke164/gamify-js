class SpriteBatch {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    clear(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawTexture(texture, position) {
        if (!texture.loaded) {
            return;
        }

        this.context.drawImage(texture, position.x, position.y, texture.width, texture.height);
    }


    drawRotatedTexture(texture, position, rotation) {
        if (texture == null || !texture.loaded) {
            return;
        }

        this.context.save();
        this.context.translate(position.x, position.y);
        this.context.rotate(rotation * Math.PI / 180);
        this.context.drawImage(texture,
            -texture.width / 2,
            -texture.height / 2,
            texture.width,
            texture.height);
        this.context.restore();
    }

    drawText(text, position, font = '12px Arial', color = 'black') {
        this.context.font = font;
        this.context.fillStyle = color;
        this.context.fillText(text, position.x, position.y);
    }
}
