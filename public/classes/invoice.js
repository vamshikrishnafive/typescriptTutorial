"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.detail}`;
    }
}
exports.Invoice = Invoice;
