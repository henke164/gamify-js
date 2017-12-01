class FireDotAbility extends BaseAbility
{
    constructor(game, level) {
        super(game, level);
    }

    onEnemyHit(arrow, enemy, renderDamageLabel) {
        enemy.burnPower = Math.round((arrow.speed * arrow.power) * (0.1 * this.level));

        if (enemy.burnInterval) {
            return;
        }

        enemy.burnInterval = setInterval(() => {
            if (enemy.shouldDestroy) {
                clearInterval(enemy.burnInterval);
                return;
            }
            enemy.reduceHealth(enemy.burnPower);
            renderDamageLabel(enemy.burnPower, enemy.position.clone(), { r:255, g:255, b:0 });
        }, 500);
    }
}

FireDotAbility.id = 2;

FireDotAbility.icon = new Texture2D('assets/abilities/fire.png', 80);

FireDotAbility.spellName = 'Fire DoT';

FireDotAbility.description = ['Does 10% (for each level) extra fire-damage', 'every 0.5 second until it dies.'];
