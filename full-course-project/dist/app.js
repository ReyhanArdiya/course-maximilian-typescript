"use strict";
const reyhan = {
    name: "reyhan",
    privileges: ["everything"],
    startDate: new Date()
};
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
const add = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
const res = add(2, "2");
const fetchedUser = {
    name: "Reyhan",
    id: "1",
    job: {
        title: "Web Developer",
        description: "So fun!"
    }
};
console.log(fetchedUser.job?.title);
const userInput = null;
const stored = userInput ?? "DEFAULT";
//# sourceMappingURL=app.js.map