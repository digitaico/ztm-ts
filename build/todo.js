"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const todosData = 'todos.json';
function saveTodos(todos) {
    fs_1.default.writeFileSync(todosData, JSON.stringify(todos));
}
function getTodos() {
    if (!fs_1.default.existsSync(todosData)) {
        return [];
    }
    const data = fs_1.default.readFileSync(todosData);
    return JSON.parse(data.toString());
}
function addTodo(task) {
    const todos = getTodos();
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    todos.push({ id, task, status: false });
    saveTodos(todos);
    console.log(`successfully added task ${task}`);
}
function removeTodo(id) {
    const todos = getTodos();
    const index = todos.findIndex((todo) => {
        return todo.id === id;
    });
    if (index === -1) {
        console.log(`Could not find todo with id ${id}`);
        return;
    }
    const removedTodos = todos.splice(index, 1)[0];
    saveTodos(todos);
    console.log(`Yep.. successfully removed ${removedTodos.id}: ${removedTodos.task}`);
}
function listTodos() {
    const todos = getTodos();
    todos.forEach((todo) => {
        console.log(todo);
    });
}
