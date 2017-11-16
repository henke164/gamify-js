class Input {
    constructor(canvas) {
        this.mouseState = {
            position: new Vector2(0, 0),
            leftButtonDown: false,
            rightButtonDown: false,
        };

        this.bindMouseEvents(canvas);
    }

    bindMouseEvents(canvas) {
        canvas.addEventListener('mousemove', (evt) => {
            var rect = canvas.getBoundingClientRect();
            this.mouseState.position = new Vector2(evt.clientX - rect.left, evt.clientY - rect.top);
        });

        canvas.addEventListener('mousedown', (evt) => {
            if (evt.which == 1) {
                this.mouseState.leftButtonDown = true;
            }
            if (evt.which == 3) {
                this.mouseState.rightButtonDown = true;
            }
        });

        canvas.addEventListener('mouseup', (evt) => {
            if (evt.which == 1) {
                this.mouseState.leftButtonDown = false;
            }
            if (evt.which == 3) {
                this.mouseState.rightButtonDown = false;
            }
        });
    }
}
