abstract class Component<
	THost extends HTMLElement,
	TElement extends HTMLElement
> {
	private templateElement: HTMLTemplateElement;
	private hostElement: THost;
	private element: TElement;

	constructor(
		templateId: string,
		hostElementId: string,
		inserPosition: InsertPosition,
		newElementId?: string
	) {
		this.templateElement = document.getElementById(
			templateId
		) as HTMLTemplateElement;
		this.hostElement = document.getElementById(hostElementId) as THost;

		if (newElementId) {
			this.element = document.getElementById(newElementId) as TElement;
		} else {
			this.element = this.templateElement.content.cloneNode()
				.firstChild as TElement;
		}

		this.attach(inserPosition);
	}

	// private render() {
	// 	this.hostElement.insertAdjacentElement(
	// 		"beforeend",
	// 		this.templateElement.content.cloneNode(true).firstChild
	// 	);
	// }

	private attach(inserPosition: InsertPosition = "beforeend") {
		this.hostElement.insertAdjacentElement(inserPosition, this.element);
	}

    protected abstract configure(): void
    protected abstract renderContent(): void
}

// class ProjectList extends Component<HTMLFormElement, HTMLElement> {
// 	constructor(additional: [meow: number, henlo: string], ...superParams: ConstructorParameters<typeof Component>) {
// 		super(...superParams);
// 	}
// }

