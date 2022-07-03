function add(a: number, b: number) {
	return a + b;
}

const prnt = () => console.log(1);

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = prnt;
// combineValues = 2;

console.log(combineValues(55, 5));

interface Todo {
	title: string;
	desc: string;
}

const todoUsed = <T = Todo>(
	todo: T,
	preFinish: (todo: T) => typeof todo,
	onFinish: (todo: ReturnType<typeof preFinish>) => void
) => onFinish(preFinish(todo));

todoUsed(
	{ desc: "hello world", title: "meow" },
	todo => (console.log(todo.title) as undefined) || todo,
	todo => console.log(todo.desc)
);

const a = (): void => {
	return undefined;
};
