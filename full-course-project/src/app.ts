// const Logger = (t: Function) => {
// 	console.log("Logging...");
// 	console.log(t);
// };

// const LoggerFactory =
// 	({ rounds = 1 }: { rounds: number }) =>
// 	(v: unknown) => {
// 		for (let i = 0; i < rounds; i++) {
// 			console.log("logging...");
// 			console.log(v);
// 		}
// 	};

// const PersonLogger = LoggerFactory({ rounds: 1 });

// const WithTemplate =
// 	(template: string, hookId: string) =>
// 	// <T extends Function & { new (): void }>(Constructor: T) => {
// 	<T extends { new (..._: any[]): { name: string } }>(Constructor: T) => {
// 		//@ts-ignore
// 		return class extends Constructor {
// 			constructor() {
// 				super();
// 				console.log("Second!");
// 				const portal = document.getElementById(
// 					hookId
// 				) as HTMLDivElement;
// 				const p = new Constructor("Hello!");

// 				if ("name" in this) {
// 					portal.innerHTML = template + this.name;
// 				}
// 			}
// 		};
// 	};

// // @PersonLogger
// @WithTemplate("<h1>Hello world!</h1>", "portal")
// class Person {
// 	constructor(public name: string) {}
// }

// console.log(new Person("Hellkjo!"));

// const LogProp = (target: any, name: string | number | symbol) => {
// 	console.log("Logging!");
// 	console.log(target, name);
// };

// const LogAccessor = (
// 	t: object | Function,
// 	name: string | number | symbol,
// 	descriptor: PropertyDescriptor
// ) => {
// 	console.log("Accessor!");
// 	console.log(t);
// 	console.log(name);
// 	console.log(descriptor);
// };

// const LogMethod = (
// 	t: object | Function,
// 	name: string | number | symbol,
// 	descriptor: PropertyDescriptor
// ): PropertyDescriptor => {
// 	console.log("Method!");
// 	console.log(t);
// 	console.log(name);
// 	console.log(descriptor);

// 	return {
// 		enumerable: false,
// 		configurable: true,
// 		writable: true
// 	};
// };

// const LogParam = (
// 	t: object | Function,
// 	name: string | number | symbol,
// 	position: number
// ) => {
// 	console.log("Param!");
// 	console.log(t);
// 	console.log(name);
// 	console.log(position);
// };

// class Product {
// 	@LogProp
// 	public name: string;
// 	private _price: number;

// 	constructor(name: string, _price: number) {
// 		this.name = name;
// 		this._price = _price;
// 	}

// 	@LogMethod
// 	getPriceWithTax(@LogParam tax: number) {
// 		return this._price * (1 + tax);
// 	}

// 	@LogAccessor
// 	set price(price: number) {
// 		if (price > 0) {
// 			this._price = price;
// 		} else {
// 			throw new Error("No negative price!");
// 		}
// 	}
// }

// const p = new Product("meow", 23);

// for (const key in p) {
// 	console.log(key);
// }
// // p.getPriceWithTax = t => t;
// //@ts-ignore
// delete p.getPriceWithTax;
// console.log(Object.getPrototypeOf(p));

// type MethodDecorator = (
// 	t: object | Function,
// 	name: string | number | symbol,
// 	descriptor: PropertyDescriptor
// ) => PropertyDescriptor;

const Autobind: MethodDecorator = (
	_t,
	_name,
	{ value, configurable, enumerable, writable }
) => ({
	configurable,
	enumerable,
	// writable,
	get() {
		if (value instanceof Function) {
			return value.bind(this);
		}
	}
});

class Printer {
	public message = "This works!";

	@Autobind
	showMessage() {
		console.log(this.message);
	}
}

const p = new Printer();

// const butt = document.getElementById("butt") as HTMLButtonElement;

// butt.addEventListener("click", p.showMessage);
// console.log(p);

const ValidateCourse = (target: typeof Course) => {
	return class extends target {
		constructor(public title: string, public price: number) {
			if (!title.trim()) {
				throw new Error("Title cannot be empty!");
			}

			if (price <= 0) {
				throw new Error("Price must be set!");
			}

			super(title, price);
		}
	};
};

// CMT I'll forget this tomorrow for def BUT IT FKING WORKS BTCHES HAHA!!!
const makeValidator = () => {
	const reqArr: Array<string | symbol> = [];
	const posnumArr: Array<string | symbol> = [];

	const Required: PropertyDecorator = (target, name) => {
		// const reqKey = "_required";

		// const reqArr: Array<typeof name> | undefined = Reflect.get(target, reqKey);

		// if (reqArr) {
		reqArr.push(name);
		// } else {
		// 	Reflect.set(target, reqKey, [name]);
		// }
	};

	const MustBePositive: PropertyDecorator = (target, name) => {
		// const posnumKey = "_posnums";

		// const posnumArr: Array<typeof name> | undefined = Reflect.get(
		// 	target,
		// 	posnumKey
		// );

		// if (posnumArr) {
		posnumArr.push(name);
		// } else {
		// 	Reflect.set(target, posnumKey, [name]);
		// }
	};

	const validate = (obj: object) => ({
		required: reqArr.every(k => !!obj[k as keyof typeof obj]),
		posnums: posnumArr.every(k => obj[k as keyof typeof obj] > 0)
	});

	return {
		decorators: {
			Required,
			MustBePositive
		},
		validate
	};
};

const {
	decorators: { Required, MustBePositive },
	validate
} = makeValidator();

// @ValidateCourse
class Course {
	@Required
	public title: string;

	@MustBePositive
	public price: number;

	constructor(title: string, price: number) {
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

const BookValidator = makeValidator();

class Book {
	@BookValidator.decorators.Required
	public title: string;

	@BookValidator.decorators.Required
	@BookValidator.decorators.MustBePositive
	public age: number;

	@BookValidator.decorators.Required
	@BookValidator.decorators.MustBePositive
	public price: number;

	@BookValidator.decorators.Required
	public author: string;

	constructor(title: string, age: number, price: number, author: string) {
		this.title = title;
		this.age = age;
		this.price = price;
		this.author = author;

		console.log(BookValidator.validate(this));
	}
}

console.log(new Book("meow", 0, 0, ""));

const courseForm = document.getElementById("course-form") as HTMLFormElement;
const titleEl = courseForm.querySelector("#title") as HTMLInputElement;
const priceEl = courseForm.querySelector("#price") as HTMLInputElement;

courseForm.addEventListener("submit", e => {
	e.preventDefault();

	const { value: title } = titleEl;
	const price = +priceEl.value;

	const newCourse = new Course(title, price);

	console.log(newCourse);
});

console.log(new Course("2", 1));
