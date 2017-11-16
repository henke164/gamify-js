class Input {
    constructor(canvas) {
        this.mousePosition = new Vector2(0, 0);

        var t = this;
        canvas.addEventListener('mousemove', function(evt) {
            var rect = canvas.getBoundingClientRect();
            t.mousePosition = new Vector2(evt.clientX - rect.left, evt.clientY - rect.top);
        }, false);
    };
}
