import InputComponent from '../lib/InputComponent';

export default class TodoInput extends InputComponent {
	constructor(...props) {
		super(...props);
		this.template = (model) => `<input class='new-todo' type='text' placeholder='What needs to be done?'/>`;
	}
	submit(value) {
		this.model.todos.push({
			title: value
		});
		this.render()
	}
}
