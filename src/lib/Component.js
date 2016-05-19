const components = [];

export default class Component {
	constructor(model = {}, target = document.body) {
		// data
		this.model = model;
		// create HTML element
		this.element = document.createElement('div');
		this.target = target;
		// add to DOM
		this.target.appendChild(this.element);
		// track all components
		components.push(this);
		// delay first render until loaded
		setTimeout(() => this.render());
	}
	register(name) {
		let self = this;
		let prototype = Object.create(HTMLElement.prototype)
		prototype.createdCallback = function() {
			let shadow = this.createShadowRoot();
			shadow.appendChild(self.element);
		}
		document.registerElement(name, {
			prototype
		});
	}
	addEvent(...events) {
		events.forEach((eventType) => {
			this.element.addEventListener(eventType, this);
		});
	}
	handleEvent(event) {
		switch (event.type) {
			case 'click':
				return this.click(event);
			case 'submit':
				return this.submit(event);
			case 'keyup':
				return this.keyup(event);
			default:
				console.log('event', event);
		}
	}
	render() {
		components.forEach((c) => {
			// inefficient multiple rendering
			c.element.innerHTML = c.template(this.model);
		})
	}
}
