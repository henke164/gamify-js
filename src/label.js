class Label
{
    constructor(text, position, fontColor = 'black', fontSize = '20px', fontName = 'Arial') {
        this.position = position;
        this.text = text;
        this.fontSize = fontSize;
        this.fontName = fontName;
        this.fontColor = fontColor;
    }

    render(ctx) {
        ctx.font = this.fontSize + ' ' + this.fontName;
        ctx.fillStyle = this.fontColor;
        ctx.fillText(this.text, this.position.x, this.position.y);
    }
}
