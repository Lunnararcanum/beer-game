import Entity from "./Entity.js";

export default class Enemy extends Entity {
    constructor(name, hp, attack, defense, _super) {
        super(name, hp, attack, defense);
        this._super = _super;
    }

    LeftHandRightHand(target) {
        return target.hp = target.hp - (this.attack * 4 - target.defense);
    }
}