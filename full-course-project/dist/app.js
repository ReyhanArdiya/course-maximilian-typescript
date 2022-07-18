"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Autobind = (_t, _name, { value, configurable, enumerable, writable }) => ({
    configurable,
    enumerable,
    get() {
        if (value instanceof Function) {
            return value.bind(this);
        }
    }
});
class Printer {
    message = "This works!";
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const ValidateCourse = (target) => {
    return class extends target {
        title;
        price;
        constructor(title, price) {
            if (!title.trim()) {
                throw new Error("Title cannot be empty!");
            }
            if (price <= 0) {
                throw new Error("Price must be set!");
            }
            super(title, price);
            this.title = title;
            this.price = price;
        }
    };
};
const makeValidator = () => {
    const reqArr = [];
    const posnumArr = [];
    const Required = (target, name) => {
        reqArr.push(name);
    };
    const MustBePositive = (target, name) => {
        posnumArr.push(name);
    };
    const validate = (obj) => ({
        required: reqArr.every(k => !!obj[k]),
        posnums: posnumArr.every(k => obj[k] > 0)
    });
    return {
        decorators: {
            Required,
            MustBePositive
        },
        validate
    };
};
const { decorators: { Required, MustBePositive }, validate } = makeValidator();
class Course {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
        const { posnums, required } = validate(this);
        if (!required) {
            throw new Error("Title cannot be empty!");
        }
        if (!posnums) {
            throw new Error("Price must be set!");
        }
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    MustBePositive
], Course.prototype, "price", void 0);
const BookValidator = makeValidator();
class Book {
    title;
    age;
    price;
    author;
    constructor(title, age, price, author) {
        this.title = title;
        this.age = age;
        this.price = price;
        this.author = author;
        console.log(BookValidator.validate(this));
    }
}
__decorate([
    BookValidator.decorators.Required
], Book.prototype, "title", void 0);
__decorate([
    BookValidator.decorators.Required,
    BookValidator.decorators.MustBePositive
], Book.prototype, "age", void 0);
__decorate([
    BookValidator.decorators.Required,
    BookValidator.decorators.MustBePositive
], Book.prototype, "price", void 0);
__decorate([
    BookValidator.decorators.Required
], Book.prototype, "author", void 0);
console.log(new Book("meow", 0, 0, ""));
const courseForm = document.getElementById("course-form");
const titleEl = courseForm.querySelector("#title");
const priceEl = courseForm.querySelector("#price");
courseForm.addEventListener("submit", e => {
    e.preventDefault();
    const { value: title } = titleEl;
    const price = +priceEl.value;
    const newCourse = new Course(title, price);
    console.log(newCourse);
});
console.log(new Course("2", 1));
//# sourceMappingURL=app.js.map