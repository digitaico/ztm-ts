import fs from 'fs';

const todosData = 'todos.json';

type Todo = {
  id: number;
  task: string;
  status: boolean;
};

function saveTodos(todos: Todo[]): void {
  fs.writeFileSync(todosData, JSON.stringify(todos));
}

function getTodos(): Todo[] {
  if (!fs.existsSync(todosData)) {
    return [];
  }
  const data = fs.readFileSync(todosData);
  return JSON.parse(data.toString()) as Todo[];
}

function addTodo(task: string): void {
  const todos: Todo[] = getTodos();
  const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  todos.push({ id, task, status: false });
  saveTodos(todos);
  console.log(`successfully added task ${task}`);
}

function removeTodo(id: number): void {
  const todos: Todo[] = getTodos();
  const index = todos.findIndex((todo) => {
    return todo.id === id;
  });

  if (index === -1) {
    console.log(`Could not find todo with id ${id}`);
    return;
  }
  const removedTodos = todos.splice(index, 1)[0];
  saveTodos(todos);
  console.log(
    `Yep.. successfully removed ${removedTodos.id}: ${removedTodos.task}`,
  );
}

function listTodos(): void {
  const todos: Todo[] = getTodos();
  todos.forEach((todo) => {
    console.log(todo);
  });
}

function cli();
