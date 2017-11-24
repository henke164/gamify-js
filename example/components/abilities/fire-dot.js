class FireDotAbility
{
    constructor(game, level) {
        this.game = game;
        this.level = level;
    }

    onShoot() {}

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        var burnPower = Math.round((arrow.speed * arrow.power) * (0.1 * this.level));

        var ticks = 0;
        var burnInterval = setInterval(() => {
            if (enemy.shouldDestroy) {
                clearInterval(burnInterval);
                return;
            }
            enemy.reduceHealth(burnPower);
            renderDamageLabel(burnPower, enemy.position.clone());
            ticks++;
            if(ticks == 6) {
                clearInterval(burnInterval);
            }
        }, 500);
    }
}

FireDotAbility.icon = new Texture2D('images/abilities/fire.png', 80);

FireDotAbility.spellName = 'Fire DoT';

FireDotAbility.description = ['Does 10% (for each level) extra fire-damage', 'every 0.5 second for 3 seconds.'];
