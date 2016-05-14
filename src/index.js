const Todos = require('./Todos');
const Button = require('./Button');

const model = {
	todos: [{
		title: 'First todo'
	}, {
		title: 'Second todo'
	}, {
		title: 'Third todo'
	}]
};

let todos = new Todos(model);
let submit = new Button(model);
