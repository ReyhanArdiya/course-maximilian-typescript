"use strict";
let userInput;
let userName;
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
const genError = (msg, code) => {
    throw { msg, code };
};
const u = 1;
console.log("Meow!!!");
