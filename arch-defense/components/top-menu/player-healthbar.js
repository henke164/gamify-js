class PlayerHealthBar {
    constructor(scene) {
        this.scene = scene;
        this.startHealth = this.scene.health;
        this.fullContentWidth = 154;
        this.background = new Texture2D('assets/player_healthbar.png', 200);
        this.content = new Texture2D('assets/player_healthbar_content.png', this.fullContentWidth, 21);
    }

    update() {
        var healthPercentage = this.scene.health / this.startHealth;
        this.content.width = this.fullContentWidth * healthPercentage;
    }
    
    render(spriteBatch) {
        spriteBatch.drawTexture(this.background, Vector2.zero);
        spriteBatch.drawTexture(this.content, new Vector2(40, 10));
    }
}