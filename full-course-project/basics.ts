const add = (n1: number, n2: number, printRes: boolean, resPhrase: string) =>
	printRes ? console.log(resPhrase + (n1 + n2)) : n1 + n2;

let undef: number;
const num1 = 1;
const num2 = 2;
const printRes = true;
let resPhrase = "meow!";
undef = 1;

add(num1, num2, printRes, resPhrase);

const anyObj: Record<symbol, unknown> = () => {};
