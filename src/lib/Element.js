export default class Element {
	constructor(name, model = {}) {
		this.name = name;
		// data
		this.model = model;

		this.element = document.createElement('div')
		this.register();
		setTimeout(() => this.render());
	}
	register() {
		let self = this;
		let prototype = Object.create(HTMLElement.prototype);
		prototype.createdCallback = function() {
			// this = element
			let shadow = this.createShadowRoot();
			shadow.appendChild(self.element);
		}
		document.registerElement(self.name, {
			prototype
		});
	}
	render() {
		this.element.innerHTML = this.template(this.model);
	}
}
