// const merge = <
// 	T1 extends Record<string, unknown>,
// 	T2 extends Record<string, unknown>
// >(
// 	o1: T1,
// 	o2: T2
// ) => ({
// 	...o1,
// 	...o2
// });

// const merged = merge({ m: 1 }, { e: 2 });
// // const mergedArr = merge([1, 2, 3], ["meowmere"]);

// interface HasLength {
// 	length: number;
// }

// const countAndDesc = <T extends HasLength>(val: T): [typeof val, string] => {
// 	const desc = val.length ? `Got ${val.length}` : "Got no value";
// 	return [val, desc];
// };

// // console.log(countAndDesc(""));
// // console.log(countAndDesc("123"));
// // console.log(countAndDesc([1, 2, 3]));
// // console.log(countAndDesc({ length: 23 }));

// const extract = <T extends Record<string, unknown>, K extends keyof T>(
// 	obj: T,
// 	key: K
// ) => obj[key];

// // console.log(extract({ hello: "world", miaw: 2 }, "miaw"));

// const ext3 = <
// 	T1 extends Record<string, unknown>,
// 	T2 extends Record<string, unknown>,
// 	T3 extends Record<string, unknown>,
// 	K extends keyof T1 & keyof T2 & keyof T3
// >(
// 	o1: T1,
// 	o2: T2,
// 	o3: T3,
// 	k: K
// ) => {
// 	if (k in o1 && k in o2 && k in o3) {
// 		return o1[k];
// 	}
// };

// // console.log(ext3({ a: true }, { a: 1, b: 2 }, { b: 2, c: 3, a: 1 }, "a"));

// class DataStorage<T extends string | number | boolean | unknown = unknown> {
// 	private data: T[] = [];

// 	addItem(item: T) {
// 		this.data.push(item);
// 	}

// 	removeItem(item: T) {
// 		const index = this.data.indexOf(item);
// 		if (index >= 0) {
// 			this.data.splice(index, 1);
// 		}
// 	}

// 	get items() {
// 		return [...this.data];
// 	}
// }

// const textStore = new DataStorage();

// textStore.addItem({ meow: 1 });

// const numberStore = new DataStorage<number | string>();

// numberStore.addItem(12);
// console.log(numberStore.items);

// const objStore = new DataStorage<object>();

// objStore.addItem({ name: "Max" });
// objStore.addItem({ name: "Max" });

// objStore.removeItem({ name: "Max" });

// console.log(objStore.items);

// interface Mandatory {
// 	age: number;
// 	name: string;
// 	goal: string[];
// }

// const person: Partial<Mandatory> = {
// 	age: 1
// };

// person.age = 1;
// person.goal = ["2"];
// person.name = "d";

// const names: Partial<Mandatory> = {};

// names.age = 2;
// e;
// const sports: Readonly<string[]> = [];

// const extractData = <T = 130>(
// 	obj: Record<string, string>,
// 	k: keyof typeof obj
// ): T => obj[k];

// const res = extractData(130, "e");
