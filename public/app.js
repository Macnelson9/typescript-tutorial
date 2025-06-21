import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payments.js";
// IMPORTANT: Interfaces
// An interface allows us to enforce a certain structure of a class or an object. We can use it to describe what properties, methods, types of those properties, and what the return types of those methods are.
// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'uche',
//     age: 25,
//     speak(text: string): void
//     {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log(`I spent ${amount}`)
//         return amount;
//     }
// };
// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// }
// greetPerson(me);
// console.log(me);
// IMPORTANT: Type Casting
// const anchor = document.querySelector('a')!;
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// Type casting is casting the exact type of an element when we are selecting the element using a classname. We use the as keyword and then the particular element type.
//  IMPORTANT: Classes
// class Invoice {
//     // The readonly modifier allows the variable to not be modified but only read from outside and inside the class
//     // readonly client: string;
//     // The private modifier allows to read and modify the variable only inside the class
//     // private details: string;
//     // The public modifier allows the value of the variable to be read and modified from both inside and outside of the class. It is the default.
//     // public amount: number;
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number
//     ) {}
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`;
//     }
// }
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'for plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const invOne = new Invoice ('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('uche', 'work on the uche website', 550);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
// console.log(invoices);
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// IMPORTANT: GENERICS
// They allow us to create reusable blocks of code which can be used with different types.
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docOne = addUID({ name: "uche", age: 25 });
// // let docTwo = addUID("hello");
// console.log(docOne.age);
// Generics with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: "person",
//   data: { name: "uche" },
// };
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: "shoppingList",
//   data: ["test", "bread", "milk"],
// };
// console.log(docThree, docFour);
// IMPORTANT: ENUMS
// Enums are a special type in TypeScript which allows us to store a set of constants or keywords and associate themv with a numeric value.
// enum ResourceType {
//   BOOK,
//   AUTHOR,
//   FILM,
//   DIRECTOR,
//   PERSON,
// }
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: {
//     title: "name of the wind",
//   },
// };
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.PERSON,
//   data: { name: "uche" },
// };
// console.log(docOne);
// console.log(docTwo);
// IMPORTANT Tuples
//
