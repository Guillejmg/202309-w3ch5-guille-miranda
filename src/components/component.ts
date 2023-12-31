
export abstract class Component {
	// eslint-disable-next-line @typescript-eslint/parameter-properties
	selector: string;
	template!: string;
	element!: Element;
	constructor(selector: string) {
		this.selector = selector;
	}

	render(position: InsertPosition = 'beforeend') {
		const element = document.querySelector(this.selector);
		// eslint-disable-next-line curly
		if (!element) return;
		element.insertAdjacentHTML(position, this.template);
		this.element = element.lastElementChild!;
	}

	clear() {
		this.element.outerHTML = '';
	}
}
