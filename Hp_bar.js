export default class Hp_bar {
    static RenderHP(hp_barPlayer, hp_barEnemy, player, enemy) {
        hp_barPlayer.style.width = 100 * player.hp / 100 + "%";
        hp_barEnemy.style.width = 100 * enemy.hp / 200 + "%";
    }
}