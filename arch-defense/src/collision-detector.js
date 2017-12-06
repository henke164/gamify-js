class CollisionDetector {
    static findCollisions(arr1, arr2) {
        var collisions = [];
        for (var x = 0; x < arr1.length; x++) {
            for (var y = 0; y < arr2.length; y++) {
                var midPoint1 = new Vector2(arr1[x].position.x + (arr1[x].texture.width / 2), arr1[x].position.y + (arr1[x].texture.height / 2));
                var midPoint2 = new Vector2(arr2[y].position.x + (arr2[y].texture.width / 2), arr2[y].position.y + (arr2[y].texture.height / 2));
                var widestTexture = arr1[x].texture.width > arr2[y].texture.width ? arr1[x].texture.width : arr2[y].texture.width;
                if(Vector2.distance(midPoint1, midPoint2) < (widestTexture / 2)) {
                    collisions.push({
                        gameObject1: arr1[x],
                        gameObject2: arr2[y]
                    });
                }
            }
        }
        return collisions;
    }
}
