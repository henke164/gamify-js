class FireDotAbility extends BaseAbility
{
    constructor(game, level) {
        super(game, level);
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        if (this.arrowAlreadyHitEnemy(arrow, enemy)) {
            return;
        }

        var burnPower = Math.round((arrow.speed * arrow.power) * (0.1 * this.level));
        enemy.burnTicks = 0;
        if (enemy.burnInterval) {
            enemy.burnTicks = 0;
            return;
        }
        enemy.burnInterval = setInterval(() => {
            if (enemy.shouldDestroy) {
                clearInterval(enemy.burnInterval);
                return;
            }
            enemy.reduceHealth(burnPower);
            renderDamageLabel(burnPower, enemy.position.clone(), { r:255, g:255, b:0 });
            enemy.burnTicks++;
            if(enemy.burnTicks == 6) {
                clearInterval(enemy.burnInterval);
            }
        }, 1000);
    }
}

FireDotAbility.icon = new Texture2D('images/abilities/fire.png', 80);

FireDotAbility.spellName = 'Fire DoT';

FireDotAbility.description = ['Does 10% (for each level) extra fire-damage', 'every 0.5 second for 3 seconds.'];
