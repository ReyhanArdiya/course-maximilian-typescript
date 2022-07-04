let userInput: unknown;
let userName: string;

userInput = 1;
userInput = "1";
userInput = false;
userInput = [];
userInput = {};
userInput = () => 1;
if (typeof userInput === "string") {
	userName = userInput;
}

// userName = userInput;

const genError = (msg: string, code: number) => {
	throw { msg, code };
};
const u = 1;

console.log("Meow!!!");
