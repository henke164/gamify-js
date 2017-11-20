class Texture2D extends Image {
    constructor(imagePath, width, height) {
        super();
        this.src = imagePath;
        this.onload = function() {
            var originalWidth = this.width;
            var originalHeight = this.height;
            var nPercent = 1;

            if (width && !height) {
                nPercent = width / originalWidth;
            } else if (height && !width) {
                nPercent = height / originalHeight;
            }

            this.width = originalWidth * nPercent;
            this.height = originalHeight * nPercent;
            this.loaded = true;
        };
    }
}
