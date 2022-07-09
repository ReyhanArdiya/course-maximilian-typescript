"use strict";
const Button = (props) => {
    const btn = document.createElement("button");
    for (const prop in props) {
        btn[prop] = props[prop];
    }
    return btn;
};
document.body.append(Button({
    type: "submit",
    innerText: "MEowwwHello!!!",
    onclick() {
        console.log(this);
    }
}));
const a = (a) => a;
const el = document.querySelector("meow");
el?.addEventListener("fullscreenchange", a.bind(null));
//# sourceMappingURL=app.js.map