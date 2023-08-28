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

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split(''); error, infered type number.

// Classes

class Student {

    // Declaring attributes ahead of time;
    
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string [];

    // constructor(first: string, last: string, age: number, courses: string[]) {
    //      this.firstName = first;
    //      this.lastName = last;
    //      this.age = age;
    //      this.courses = courses;
    // }

    // Short way

    constructor(
        firstName: string,
        lastName: string, 
        age: number, 
        private courses: string[]
    ) {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
student.listCourses();

// student.courses => Angular, React