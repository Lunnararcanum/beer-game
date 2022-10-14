export default class Features {
    static no_minus(hero, enemy) {
        if(hero.hp<=0){
            hero.hp = 0;
        } 
    
        if (enemy.hp<=0) {
            enemy.hp = 0;
        }
        
        document.querySelector(".hp_boss").textContent = 'HP: ' + enemy.hp;
        document.querySelector(".hp_hero").textContent = 'HP: ' + hero.hp;
    }

    static bos_super_atk(hero, enemy){
        if(enemy._super < 0){
            enemy.LeftHandRightHand(hero);
            enemy._super = 4;
        }
    }
}