export default class Entity {
    constructor(name, hp ,attack, defense,) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
    }
    BasicAttack(target) {
        return target.hp = target.hp - (this.attack - target.defense);
    }

    Defense(target) {
        this.hp = this.hp - (target.attack - this.defense * 6);
        target.hp = target.hp - (this.attack - target.defense * 2);
        document.querySelector(".defense").style.visibility = 'hidden';
    }

    Death(enemy) {
        if (enemy.hp <= 0 && this.hp <= 0 ) {
            document.querySelector(".defatk").remove();
            return "Это ничья, но ты все равно ПРОЕБАЛ!!!";
            
        } else if (enemy.hp <=0 && this.hp >0) {
            return "Это ПОБЕДА,ДАТ-ТЭ-БАЁ!!!"

        } else if (enemy.hp >0 && this.hp <=0) {
            document.querySelector(".defatk").remove();
            return "Ну мне жаль тебя растроить ,НО ИМЕНО ТЫ ПРОИГРАЛ!?!?!? ,ПОЧЕМУ ТЫ СПРОСИШЬ? ПОТОМУ ЧТО ТЫ ЛОХ!!!!"
        }
    }
}