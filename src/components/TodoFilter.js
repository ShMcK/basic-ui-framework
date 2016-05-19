import Component from '../lib/Component';

export default class TodoFilter extends Component {
	constructor(...props) {
		super(...props);
		this.template = (model) => `<li><a>Add Random</a></li>`;
		this.addEvent('click');
	}
	click(event) {
		this.model.todos.push({
			title: `Todo #${this.model.todos.length - 1}`
		})
		this.render();
	}
}
