var userInput;
var userName;
userInput = 1;
userInput = "1";
userInput = false;
userInput = [];
userInput = {};
userInput = function () { return 1; };
if (typeof userInput === "string") {
    userName = userInput;
}
// userName = userInput;
var genError = function (msg, code) {
    // throw { msg, code };
    // while (true) {}
};
var res = genError("e", 404);
