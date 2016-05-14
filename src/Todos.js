const Component = require('./lib/Component');

class Todos extends Component {
  constructor(...props) {
    super(...props);
    this.template = (model) => `<ul>
        ${model.todos.map((todo) => `<li>${todo.title}</li>`).join('')}
      </ul>`;
    // listen to changes to the DOM element
    this.element.addEventListener('click', this);
  }
  click(event) {
    const todo = event.target.textContent;
    this.model.todos = this.model.todos.filter((x) => x.title !== todo);
    this.render();
  }

}
module.exports = Todos;
