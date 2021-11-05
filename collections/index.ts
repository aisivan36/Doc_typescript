import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
	new TodoItem(1, "Buy A Car"),
	new TodoItem(2, "Take a bottle watter", true),
	new TodoItem(3, "Collect Goods"),
	new TodoItem(4, "Call Ivan", true),
];

let collection = new TodoCollection("Ivan Boginski", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for fun");
let todoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
todoItem.printDetails();

// collection.addTodo(todoItem);
