"use strict";
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
// Primitives
let age = 24;
let userName;
userName = 'Max';
let isIntstructor = true;
// More complex types
let hobbies = ['Sports', 'Cooking'];
let person;
person = {
    name: 'Max',
    age: 32
};
// Compile error because 'isEmployee' is not defined.
// person = {
//     isEmployee: true
// }
let people; // Array of objects
// Type inference
let course = 'React - The Complete Guide';
course = 1234;
// Functions & types
function add(a, b) {
    return a + b;
}
// function print ...
function say(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
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
    constructor(firstName, lastName, age, courses) {
        this.courses = courses;
    }
    enrol(courseName) {
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
/*
 Classes - Test
    Trying to dneclare attributes ahead of time and with short constructor.
*/
class StudentTest {
    constructor(name) {
        this.name = name;
    }
    getAge() { return this.age; }
    setAge(age) { this.age = age; }
}
const studentTest = new StudentTest('John');
studentTest.setAge(30);
console.log(studentTest.name, " - ", studentTest.getAge());
let max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};
class Instructor {
    greet() {
        console.log('Hello!!!!');
    }
}
