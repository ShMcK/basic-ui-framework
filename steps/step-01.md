# Step 1: Creating a Class

## Class

```js
class Todos {}
```

### Constructor & This

```js
class Todos {
	constructor() {
		this.todos = []
  }
}
```

### Methods

##### add

```js
class Todos {
	constructor() {
		this.todos = []
  }
  add(todo) {
    this.todos.push({title: todo})
  }
}
```

##### remove

```js
class Todos {
	constructor() {
		this.todos = []
  }
  add(todo) {
    this.todos.push({title: todo})
  }
  remove(todo) {
    this.todos.filter((x) => x.title !== todo);
  }
}
```

### Instantiating a Class

##### new

```js
let todoList = new Todos();
```

```js
todoList.add('wash dishes');
todoList.add('do laundry');
console.log(todoList.todos);
```

### Constructor Properties

##### Single Property

```js
class Todos {
	constructor(todos) {
		this.todos = todos;
  }
  add(todo) {
    this.todos.push({title: todo})
  }
  remove(todo) {
    this.todos.filter((x) => x.title !== todo);
  }
}
let todoList = new Todos(['mow the lawn', 'paint the fence']);
```

##### Multiple Properties

Use the [spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator).

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
