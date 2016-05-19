import Element from '../lib/Element';

export default class Todos extends Element {
	constructor(...props) {
		super(...props);
		this.template = (model) => `<h1>Item</h1>`;
		// listen to changes to the DOM element
		// this.addEvent('click');
	}
	click(event) {
		const todo = event.target.textContent;
		this.model.todos = this.model.todos.filter((x) => x.title !== todo);
		this.render();
	}

}
