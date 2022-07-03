// enum Role {
// 	ADMIN,
// 	READ_ONLY = { meow: 1 },
// 	AUTHOR
// }

// class Person {
// 	public name: string;
// 	public age: number;
// 	public hobbies: string[];
// 	// public role: [number, string];
// 	public role: Role.ADMIN;
// }

// const person: Person = {
// 	name: "reyhan",
// 	age: 20,
// 	hobbies: ["programming", "yoga"],
// 	role: Role.ADMIN
// };

// person.role === Role.AUTHOR && console.log("Isadmin");

// let a: number = 1;
// let b: number | string;

// if (typeof a === "number") {
// 	a = b;
// }

type C = "num" | "str";

const combine = (a: number | string, b: number | string, c: C = "str") =>
	c === "num" ? +a + +b : a.toString() + b.toString();

console.log(combine("meow", 1, "num"));
