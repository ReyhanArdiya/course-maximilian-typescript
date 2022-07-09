const Button = (props: object) => {
	const btn = document.createElement("button");
	for (const prop in props) {
		//@ts-expect-error
		btn[prop] = props[prop];
	}

	return btn;
};

document.body.append(
	Button({
		type: "submit",
		innerText: "MEowwwHello!!!",
		onclick() {
			console.log(this);
		}
	})
);

const a = <T extends Event>(a: T) => a;

const el = document.querySelector("meow");

el?.addEventListener("fullscreenchange", a.bind(null));
