"use strict";
///BAD SOLUTION
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 3, 2, -3])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)
var charactersCollection = new CharactersCollection_1.CharactersCollection('hello');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
