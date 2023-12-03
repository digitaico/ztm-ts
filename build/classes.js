"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runer = void 0;
const node_crypto_1 = require("node:crypto");
class Runer {
    constructor(gender, name) {
        this.averageSpeed = 0.0;
        this.status = true;
        // [ methods]
        this.run = (id) => {
            console.log(`Good! the runer with ${id} is running!`);
        };
        this.id = (0, node_crypto_1.randomInt)(1);
        this.gender = gender;
        this.name = name;
    }
}
exports.Runer = Runer;
