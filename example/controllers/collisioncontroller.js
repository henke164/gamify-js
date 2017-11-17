class CollisionController {
    constructor() {
    }

    getCollisions(arr1, arr2, collisionDistance = 100) {
        var collisions = [];
        arr1.forEach(go1 => {
            arr2.forEach(go2 => {
                if(Vector2.distance(go1.position, go2.position) < collisionDistance) {
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
