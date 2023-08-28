// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

let userName: string;

userName = 'Max';

let isIntstructor: boolean = true;

// More complex types

let hobbies: string[] = ['Sports', 'Cooking'];

 type Person = {
    name: string;
    age: number;
 };

let person: Person; 

person = {
    name:'Max',
    age: 32
}

// Compile error because 'isEmployee' is not defined.
// person = {
//     isEmployee: true
// }

let people: Person[]; // Array of objects

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 1234; 


// Functions & types

function add(a: number, b:number) {
    return a + b;
}

// function print ...
function say(value: any) {
    console.log(value);
}