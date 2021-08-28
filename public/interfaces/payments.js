"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(repe, detail, amount) {
        this.repe = repe;
        this.detail = detail;
        this.amount = amount;
    }
    Payment.prototype.fomat = function () {
        return this.repe + " owed " + this.amount + " for " + this.detail;
    };
    return Payment;
}());
exports.Payment = Payment;
