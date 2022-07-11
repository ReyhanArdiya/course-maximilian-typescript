interface HasName {
	name: string;
}

interface Privileged {
	privileges: string[];
}

type Admin = HasName & Privileged;

type Employee = HasName & { startDate: Date };

type VIPEmployee = Admin & Employee;
// interface VIPEmployee extends Admin, Employee {}

const reyhan: VIPEmployee = {
	name: "reyhan",
	privileges: ["everything"],
	startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Univ = Combinable & Numeric;
type What = HasName & Combinable;

const A = {
	a: 1,
	b: 2,
	c: 3
};

const B = {
	b: 23874,
	c: 3,
	d: 4
};

type KA = keyof typeof A;
type KB = keyof typeof B;

type AuB = KA & KB;
type Meow = Univ & AuB;

interface Add {
	(a: Combinable, b: Combinable): Combinable;
	(a: number, b: number): number;
	(a: string, b: string): string;
	(a: number, b: string): string;
	(a: string, b: number): string;
}

const add = (a: Combinable, b: Combinable) => {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString() + b.toString();
	}

	return a + b;
};

const res = add(2, "2");

// type UnknownEmployee = Employee | Admin;

// const printEmployeeInfo = (employee: UnknownEmployee) => {
// 	console.log(employee.name);

// 	if ("privileges" in employee) {
// 		console.log(employee.privileges);
// 	}

// 	"startDate" in employee && console.log(employee.startDate);
// };

// // printEmployeeInfo({
// // 	name: "Meow",
// // 	privileges: ["meow"],
// // 	startDate: new Date()
// // });

// abstract class Mobile {
// 	drive() {
// 		console.log("Driving...");
// 	}
// }

// class Car extends Mobile {}

// class Truck extends Mobile {
// 	loadCargo(amt: number) {
// 		console.log(`Loading: ${amt}`);
// 	}
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// const useVehicle = (v: Vehicle) => {
// 	v.drive();

// 	if (v instanceof Truck) {
// 		v.loadCargo(123);
// 	}
// };

// // useVehicle(new Truck());

// interface Bird {
// 	type: "bird";
// 	flyingSpeed: number;
// }

// interface Horse {
// 	type: "horse";
// 	runningSpeed: number;
// }

// type Animal = Bird | Horse;

// const moveAnimal = (a: Animal) => {
// 	let speed: number;

// 	switch (a.type) {
// 		case "bird":
// 			speed = a.flyingSpeed;
// 			break;

// 		case "horse":
// 			speed = a.runningSpeed;
// 			break;
// 	}

// 	console.log(`Moving speed: ${speed}`);
// };

// // moveAnimal({
// // 	type: "bird",
// // 	flyingSpeed: 2389
// // });

// // moveAnimal({
// // 	type: "horse",
// // 	runningSpeed: 22
// // });

// const p = document.querySelector("#user-input") as HTMLInputElement;
// // const p = <HTMLInputElement>document.querySelector("#user-input");

// p.value = "meowmere";

// interface Member {
// 	name: string;
// 	age: number;
// 	role: "Admin" | "Basic";
// }

// type Members = Record<string, Member>;
// // type Members = {
// // 	[name: string]: Member;
// // };
// // interface Members {
// // 	[name: string]: Member;
// // }
// type AMembers = Member[];

// const members: Members = {};

// interface IError extends Error {}

// interface ErrorContainer {
// 	[errorName: string]: IError;
// 	email: IError;
// }

// const errorContainer: ErrorContainer = {
// 	email: {
// 		message: "Meow",
// 		name: "Meow"
// 	},
// 	user: {
// 		message: "Meow",
// 		name: "Meow"
// 	},
// 	[{ meow: 1 }.toString()]: {
// 		message: "Meow",
// 		name: "Meow"
// 	}
// };

interface FetchedUser {
	name?: string;
	id?: string;
	job?: {
		title: string;
		description: string;
	};
}

/**
 * Hellow rold
 */
const fetchedUser: FetchedUser = {
	name: "Reyhan",
	id: "1",
	job: {
		title: "Web Developer",
		description: "So fun!"
	}
};

console.log(fetchedUser.job?.title);

const userInput: string | null = null;

const stored = userInput ?? "DEFAULT";
