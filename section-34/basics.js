// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age = 24;
var userName;
userName = 'Max';
var isIntstructor = true;
// More complex types
var hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
// Compile error because 'isEmployee' is not defined.
// person = {
//     isEmployee: true
// }
var people; // Array of objects
// Type inference
var course = 'React - The Complete Guide';
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
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split(''); error, infered type number.
// Classes
var Student = /** @class */ (function () {
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
    function Student(firstName, lastName, age, courses) {
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
student.listCourses();
// student.courses => Angular, React
/*
 Classes - Test
    Trying to dneclare attributes ahead of time and with short constructor.
*/
var StudentTest = /** @class */ (function () {
    function StudentTest(name) {
        this.name = name;
    }
    StudentTest.prototype.getAge = function () { return this.age; };
    StudentTest.prototype.setAge = function (age) { this.age = age; };
    return StudentTest;
}());
var studentTest = new StudentTest('John');
studentTest.setAge(30);
console.log(studentTest.name, " - ", studentTest.getAge());
