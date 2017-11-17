class CollisionDetector {
    static findCollisions(arr1, arr2) {
        var collisions = [];
        arr1.forEach(go1 => {
            arr2.forEach(go2 => {
                var midPoint1 = new Vector2(go1.position.x + (go1.texture.width / 2), go1.position.y + (go1.texture.height / 2));
                var midPoint2 = new Vector2(go2.position.x + (go2.texture.width / 2), go2.position.y + (go2.texture.height / 2));
                var widestTexture = go1.texture.width > go2.texture.width ? go1.texture.width : go2.texture.width;
                if(Vector2.distance(midPoint1, midPoint2) < (widestTexture / 2)) {
                    collisions.push({
                        go1,
                        go2
                    });
                }
            });
        });
        return collisions;
    }
}
