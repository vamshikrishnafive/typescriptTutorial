"use strict";
// import { Invoice } from './classes/invoice.js';
var me = {
    name: 'vamshi',
    age: 27,
    speak: function (words) {
        console.log(words);
    },
    spend: function (amount) {
        console.log("I spent " + amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log("hello " + person.name);
};
greetPerson(me);
console.log(me);
