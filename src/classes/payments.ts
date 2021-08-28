import { HasFormatter } from '../interfaces/hasFomatter.js'

export class Payment implements HasFormatter{
    constructor(
        readonly repe: string,
        private detail: string,
        public amount: number) {}

    format() {
        return `${this.repe} owed ${this.amount} for ${this.detail}`;
    }
}