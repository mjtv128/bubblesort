"use strict";
// class Sorter {
//     constructor(public collection: number[]) { }
//     sort(): void {
//         const { length } = this.collection
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - i - 1; j++) {
//                 if (this.collection[j] > this.collection[j + 1])
//                 ///this doesnt work for strings, upper case and lower-
//                 // sorting order wont work
//                 {
//                     const leftHand = this.collection[j]
//                     this.collection[j] = this.collection[j + 1]
//                     //cannot do index assignment to string
//                     //as string is mutable
//                     this.collection[j] = leftHand
//                 }
//             }
//         }
//     }
// }
// const sorter = new Sorter([10, 3, -5, 0])
