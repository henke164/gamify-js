class Label
{
    constructor(text, position, fontColor = 'black', fontSize = '20px', fontName = 'Arial') {
        this.position = position;
        this.text = text;
        this.fontSize = fontSize;
        this.fontName = fontName;
        this.fontColor = fontColor;
    }

    render(spriteBatch) {
        var font = this.fontSize + ' ' + this.fontName;
        spriteBatch.drawText(this.text, this.position, font, this.fontColor);
    }
}
