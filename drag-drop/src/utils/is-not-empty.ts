interface Lengthy {
    length: number
}

const isNotEmpty = (...obj: Lengthy[]) => obj.every(o => o.length > 0);

export default isNotEmpty;

console.log(isNotEmpty("meow", ""));
console.log(isNotEmpty(["meow"]));

console.log(isNotEmpty({ length: 2 }));
