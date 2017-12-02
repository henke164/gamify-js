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

    drawText(text, position, font = '12px Arial', color = 'black', maxWidth = null) {
        this.context.font = font;
        this.context.fillStyle = color;

        if (maxWidth) {
            var textParts = text.split(' ');
            var row = [];
            var currentWidth = 0;
            var topMargin = 0;
            for (var x = 0; x < textParts.length; x++) {
                var wordSize = this.context.measureText(textParts[x]);

                if (currentWidth + wordSize.width > maxWidth) {
                    this.context.fillText(row.join(' '), position.x, position.y + topMargin);
                    row = [textParts[x]];
                    currentWidth = 0;
                    topMargin += 20;
                } else {
                    currentWidth += wordSize.width;
                    row.push(textParts[x]);
                    if (x + 1 == textParts.length) {
                        this.context.fillText(row.join(' '), position.x, position.y + topMargin);
                    }
                }
            }
        } else {
            this.context.fillText(text, position.x, position.y);
        }
    }
}
