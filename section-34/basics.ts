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

let person: {
    name: string;
    age: number;
}; 

person = {
    name:'Max',
    age: 32
}

// Compile error because 'isEmployee' is not defined.
// person = {
//     isEmployee: true
// }

let people: {
    name: string;
    age: number;
}[]; // Array of objects 
