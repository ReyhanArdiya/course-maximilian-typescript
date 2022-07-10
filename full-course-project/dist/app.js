"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello! I am ${this.name} and ${this.age} old`;
    }
}
const person = new Person("Max", 20);
let addFn;
addFn = (a, b) => a + b;
const str = addFn("Meow", "mere");
class Product {
    name;
    alternateName;
    constructor(name, alternateName) {
        this.name = name;
        this.alternateName = alternateName;
    }
    printAlternateName() {
        console.log(this.alternateName);
    }
}
const book = new Product("Hello!");
book.printAlternateName();
//# sourceMappingURL=app.js.map