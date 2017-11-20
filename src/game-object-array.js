class GameObjectArray {
    constructor() {
        this.gameObjects = [];
        this.length = this.gameObjects.length;
    }

    addGameObject(type) {
        var obj = new type();
        if(!obj instanceof GameObject) {
            console.log('Type is not an GameObject');
            return;
        }
        this.gameObjects.push(obj);
        this.length++;
        return obj;
    }

    updateAll() {
        var idx = this.gameObjects.length
        while (idx--) {
            this.gameObjects[idx].update();
            if (this.gameObjects[idx].shouldDestroy) {
                this.gameObjects.splice(idx, 1);
            }
        }
        this.length = this.gameObjects.length;
    }

    renderAll(ctx) {
        for (var x = 0; x < this.gameObjects.length; x++) {
            this.gameObjects[x].render(ctx);
        };
    }
}
