import Component from '../lib/Component';

export default class Todos extends Component {
	constructor(...props) {
			super(...props);
			this.template = (model) => `<section class='main'>
        <ul class='todo-list'>
        ${model.todos.map((todo) => `<li>
            <input class='toggle' type='checkbox'>
            <label>${todo.title}</label>
          </li>`).join('')}
      </ul>
    </section>`;
    // listen to changes to the DOM element
    // this.addEvent('click');
  }
  click(event) {
    const todo = event.target.textContent;
    this.model.todos = this.model.todos.filter((x) => x.title !== todo);
    this.render();
  }

}
