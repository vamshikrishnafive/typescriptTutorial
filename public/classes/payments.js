"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(repe, detail, amount) {
        this.repe = repe;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.repe} owed ${this.amount} for ${this.detail}`;
    }
}
exports.Payment = Payment;
