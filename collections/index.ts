import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
	new TodoItem(1, "Buy A Car"),
	new TodoItem(2, "Take a bottle watter"),
	new TodoItem(3, "Collect Goods"),
	new TodoItem(4, "Call Ivan", true),
];

let collection = new TodoCollection("Ivan Boginski", todos);
let showCompleted = true;

function displayTodoList(): void {
	console.log(
		`
    ${collection.userName}'s Todo List ` +
			`   (${collection.getItemCounts().incomplete} items to do)`
	);
	collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}

enum Commands {
	Toggle = "Show/Hide Completed",
	Quit = "Quit",
}

function promptUser(): void {
	console.clear();
	displayTodoList();
	inquirer
		.prompt({
			type: "list",
			name: "command",
			message: "Choose option",
			choices: Object.values(Commands),
			// badProperty: true,
		})
		.then((answer) => {
			// if (answer["command"] !== Commands.Quit) {
			switch (answer["command"]) {
				case Commands.Toggle:
					showCompleted = !showCompleted;
					promptUser();
					break;
			}
		});
}

promptUser();

console.clear();
// console.log(${collection.userName}'s Todo List);
console.log(
	` ${collection.userName}'s Todo List` +
		` (${collection.getItemCounts().incomplete} items to do)`
);

// let newId = collection.addTodo("Go for fun");
// let todoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
// todoItem.printDetails();

// collection.addTodo(todoItem);
// collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
