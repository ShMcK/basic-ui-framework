import Todos from './components/Todos';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoEl from './components/TodoEl';

const model = {
	todos: [{
		title: 'First todo'
	}, {
		title: 'Second todo'
	}, {
		title: 'Third todo'
	}]
};

let app = document.getElementById('todos');

let todoInput = new TodoInput(model, app);
let todos = new Todos(model, app);

let filters = document.getElementsByClassName('filters')[0];
let filterAll = new TodoFilter(model, filters);

let demo = new TodoEl('demo-example', model);
