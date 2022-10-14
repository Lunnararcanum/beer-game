import Hero from "./entity/Hero.js";
import Enemy from "./entity/Enemy.js";
import Hp_bar from "./Hp_bar.js";
import Features from "./Features.js";

let img_gg = document.createElement('img');
img_gg.src= "./cartinki/i2.png"
document.querySelector('.gg').appendChild(img_gg);

let img_boss = document.createElement('img');
img_boss.src = "./cartinki/i3.png"
document.querySelector('.boss').appendChild(img_boss);

let enemye = new Enemy("Zen", 200, 5, 2, 4);
let hero = new Hero("NEWHERO" , 100 , 10, 1, 5);

const attack = document.querySelector(".attack");
const defense = document.querySelector(".defense");
let super_atk = document.querySelector('.super_atk');
const win_info = document.querySelector(".win_info");

let hp_boss = document.createElement('p');
hp_boss.classList.add("hp_boss");
hp_boss.textContent = 'HP: ' + enemye.hp;
document.querySelector('.hp_b').appendChild(hp_boss);
let hp_hero = document.createElement('p');
hp_hero.classList.add("hp_hero");
hp_hero.textContent = 'HP: ' + hero.hp;
document.querySelector('.hp_h').appendChild(hp_hero);

let vragi = ["enemye"];

attack.addEventListener('click',()=> {
    hero.BasicAttack(enemye);
    enemye.BasicAttack(hero);

    win_info.textContent = hero.Death(enemye);

    Features.no_minus(hero, enemye);

    Hp_bar.RenderHP(document.querySelector(".hp_h"), document.querySelector(".hp_b"), hero, enemye);

    document.querySelector(".defense").style.visibility = 'visible'

    hero._super--;
    enemye._super--;

    if(hero._super <= 0){
        super_atk.style.visibility = 'visible';
    }

    Features.bos_super_atk(hero, enemye);
})

defense.addEventListener('click',() =>{
    
    hero.Defense(enemye);
    
    win_info.textContent = hero.Death(enemye);

    Features.no_minus(hero, enemye);

    Hp_bar.RenderHP(document.querySelector(".hp_h"), document.querySelector(".hp_b"), hero, enemye);

    enemye._super--;

    Features.bos_super_atk(hero, enemye);
})


super_atk.addEventListener("click", () => {
    hero.SuperAttack(enemye);
    
    win_info.textContent = hero.Death(enemye);

    Features.no_minus(hero, enemye);

    Hp_bar.RenderHP(document.querySelector(".hp_h"), document.querySelector(".hp_b"), hero, enemye);

    hero._super = 5;

    enemye._super--;

    Features.bos_super_atk(hero, enemye);
});

 