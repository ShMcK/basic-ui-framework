const Component = require('./lib/Component');

class Button extends Component {
  constructor(...props) {
    super(...props);
    this.template = (model) => `<button>Add Todo</button>`;
    this.element.addEventListener('click', this);
  }
  click(event) {
    this.model.todos.push({
      title: `Todo #${this.model.todos.length - 1}`
    })
    this.render();
  }
}
module.exports = Button;
