"use strict";
// let character = 'uche';
// let age = 25;
// let isBlackBelt = false;
// We can change the values of the types defined above but not the types themselves.
// character = 20;
// character = 'ofatu';
// age = 'uche';
// age = 24;
// isBlackBelt = 'yes';
// isBlackBelt = true;
// const circ = function (diameter: number) {
//     return diameter * Math.PI;
// }
// console.log(circ(7.5));
////////////////////////////////////////////////////
// IMPORTANT: Objects and Arrays
// Arrays
// let names = ['uche', 'chidozie', 'ikenna'];
// names.push('chijioke');
// names.push(3);   cannot add a different type to an array that has been defined with a specific type
// names[0] = 4;
// let numbers = [10, 20, 30, 40];
// numbers.push(50);
// numbers.push('uche')
// let mixed = ['dom', 25, 'rift', 8, 9, false];
// mixed.push('uche')
// mixed.push(5)
// mixed[0] = 'ofatu';
// Objects
// let ninja = {
//     name: 'mario', // If we specify a property to be a specific type, then we can't change that type e,g tis name property cannot be changed to a number
//     belt: 'black',
//     age: 25
// }
// ninja.age = 24;
// ninja.name = 'uche';
// ninja.age = 90
// ninja.skills = ['fighting', 'sneaking'] //We cannot add a new property that didn't exist at the object's creation to an object
// ninja = {
//     name: 'uche',
//     belt: 'black',
//     age: 24
// }
////////////////////////////////////////////////////
// IMPORTANT
// Explicit Types (How we explitcitly set our variable type before we set the variable value )
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age = 'uche';
// age = 25
// isLoggedIn = 'uche';
// isLoggedIn = true;
// Arrays
// let ninjas = string[]; // This will not be able to accept the push method because it has not been initialized yet.So it has to be initialized as an empty array for the push method to work on it.
// let ninjas: string[] = [];
// ninjas.push('domrift');
// Union Types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(25);
// mixed.push(false);
// console.log(mixed);
// let uid: string|number;
// uid = 'macnelson9';
// uid = 123;
// console.log(uid);
// Objects
// let ninjaOne: object;
// ninjaOne = {
//     name: 'uche',
//     belt: 'black',
//     age: 25
// }
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string,
//     wins: number
// }
// ninjaTwo = {
//     name: 'uche',
//     age: 25,
//     beltColour: 'black',
//     wins: 20
// }
// console.log(ninjaTwo);
// IMPORTANT: Dynamic (Any) Type
// We use this in TypeScript to say that a variable can be any type
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = {
//     name: 'uche'
// }
// console.log(age)
// let mixed: any[] = [];
// mixed.push('uche')
// mixed.push(25)
// mixed.push(true)
// console.log(mixed);
// let ninja: {name: any, age: any};
// ninja = {
//     name: 'kidi',
//     age: 23
// }
// console.log(ninja)
// ninja = {
//     name: 23,
//     age: 'kidi'
// }
// console.log(ninja)
////////////////////////////////////////////////////
// IMPORTANT: Functions
// let greet: Function;
// greet = () => {
//     console.log('Hello world!')
// };
// A function returns void when it does not return anything or when the type of the return value is not specified.Just like the greet function above and add function below
// const add = function (a:number, b:number, c:number | string = 10) {
//     console.log(a + b);
//     console.log(c);
// };
// add(5, 10, '20');
// Typescript infers the type of value a function returns based on the return value of the function. Unless explicitly stated like in the minus function below. So the function below will return a number type value, which is indicated by the `: number` after the function parameters.
// const minus = function (a:number, b:number): number {
//     return a - b;
// }
// let result = minus(10, 5);
////////////////////////////////////////////////////
// IMPORTANT: Type Aliases
// We can use type aliases to create a new type that can be used in multiple places in our code to avoid code duplication.
// type StringOrNum = string | number;
// type objWithName = {name: string, uid: StringOrNum};
// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`)
// }
////////////////////////////////////////////////////
// IMPORTANT: Function Signatures
// A function signature is a way to define the types of parameters and return value of a function.
// It is a way to define the shape of a function.
// let greet: Function;
// () => void;
// Example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// Example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === 'add') {
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// }
// Example 3
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = {name: string, age: number};
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }
