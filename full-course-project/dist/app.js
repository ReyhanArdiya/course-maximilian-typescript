"use strict";
const merge = (o1, o2) => ({
    ...o1,
    ...o2
});
const merged = merge({ m: 1 }, { e: 2 });
const countAndDesc = (val) => {
    const desc = val.length ? `Got ${val.length}` : "Got no value";
    return [val, desc];
};
console.log(countAndDesc(""));
console.log(countAndDesc("123"));
console.log(countAndDesc([1, 2, 3]));
console.log(countAndDesc({ length: 23 }));
const extract = (obj, key) => obj[key];
console.log(extract({ meow: 1 }, "meow"));
//# sourceMappingURL=app.js.map