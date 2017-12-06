class Texture2D extends Image {
    constructor(imagePath, width, height) {
        super();
        this.src = imagePath;
        this.onload = function() {
            var originalWidth = this.width;
            var originalHeight = this.height;

            if (width && !height) {
                var nPercent = width / originalWidth;
                this.width = originalWidth * nPercent;
                this.height = originalHeight * nPercent;
            } else if (height && !width) {
                var nPercent = height / originalHeight;
                this.width = originalWidth * nPercent;
                this.height = originalHeight * nPercent;
            } else if (height && width) {
                this.width = width;
                this.height = height;
            } else {
                this.width = originalWidth;
                this.height = originalHeight;
            }
            this.loaded = true;
        };
    }
}
