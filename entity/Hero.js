import Entity from "./Entity.js";

export default class Hero extends Entity {
    constructor(name, hp, attack, defense, _super) {
        super(name, hp, attack, defense)
        this._super = _super;
    }

    Defense(target) {
        target._super = 4;
        console.log(target._super);
        document.querySelector(".defense").style.visibility = 'hidden';
    }

    SuperAttack(target) {
        document.querySelector(".super_atk").style.visibility = 'hidden';
        return target.hp /= 2;
    }
}