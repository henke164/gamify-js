class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    normalize() {
        var length = Math.sqrt((this.x * this.x) + (this.y * this.y));
        this.x = this.x / length;
        this.y = this.y / length;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    static direction(v1, v2) {
        var direction = new Vector2(v2.x - v1.x, v2.y - v1.y);
        direction.normalize();
        return direction;
    }

    static distance(v1, v2) {
        return Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2));
    }
}

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    embraces(point) {
        return point.x > this.x && point.x < this.x + this.width &&
        point.y > this.y && point.y < this.y + this.height;
    }
}

Vector2.zero = new Vector2(0, 0);

var TEXTURECORNER = {
    RIGHT: 0,
    TOP: 90,
    LEFT: 180,
    BOTTOM: 270
}

function sortNumber(a,b) {
    return a - b;
}

function sortNumberDesc(a,b) {
    return b - a;
}