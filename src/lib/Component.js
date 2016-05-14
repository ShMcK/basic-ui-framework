const components = [];

class Component {
  constructor(model = {}, target = document.body) {
    // data
    this.model = model;
    // create HTML element
    this.element = document.createElement('div');
    // add to DOM
    target.appendChild(this.element);
    // track all components
    components.push(this);
    // delay first render until loaded
    setTimeout(() => this.render());
  }
  handleEvent(event) {
    switch (event.type) {
      case "click":
        this.click(event);
    }
  }
  render() {
    components.forEach((c) => {
      // inefficient multiple rendering
      c.element.innerHTML = c.template(this.model);
    })
  }
}
module.exports = Component;
