// interface Named {
// 	readonly name: string;
// }

// interface Greetable extends Named {
// 	greet(): string;
// }

// class Person implements Greetable {
// 	constructor(public name: string, public age: number) {}

// 	greet(): string {
// 		return `Hello! I am ${this.name} and ${this.age} old`;
// 	}
// }

// const person: Greetable = new Person("Max", 20);

// // console.log(person.greet());

// // type AddFn = (a: number, b: number) => number;
// interface AddFn {
// 	// (a: number, b: number): number;
// 	(a: string, b: string): string;
// }

// let addFn: AddFn;

// addFn = (a, b) => a + b;

// const str = addFn("Meow", "mere");

// interface Sellable extends Named {
// 	alternateName?: string;
// }

// class Product implements Sellable {
// 	constructor(public name: string, public alternateName?: string) {}

// 	public printAlternateName() {
// 		console.log(this.alternateName);
// 	}
// }

// const book = new Product("Hello!");

// book.printAlternateName();
