# Step 2: Rendering

```js
class Todos {
	constructor(...todos) {
		this.todos = ...todos;
  }
  add(todo) {
    this.todos.push({title: todo})
  }
  remove(todo) {
    this.todos.filter((x) => x.title !== todo);
  }
}
let todoList = new Todos('mow the lawn', 'paint the fence');
```
