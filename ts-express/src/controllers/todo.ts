import { RequestHandler, Response } from "express";
import Todo from "../models/todo.js";

const todosStore: { [todoId: string]: Todo } = {};

type TodoRequestHandler = RequestHandler<unknown, Todo, Partial<Todo>>;

export const createTodo: TodoRequestHandler = (req, res) => {
	// const {} = req.body as Todo;
	const { start, title } = req.body;
	console.log(req.body);

	if (!start || !title) {
		throw new Error("Please include all fields!");
	}

	const newTodo = new Todo((Math.random() * 34789).toString(), title, start);

	todosStore[newTodo.id] = newTodo;

	res.status(203).json(newTodo);
};

export const getTodos: RequestHandler = (req, res) => {
	res.status(200).json(todosStore);
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
	const { id } = req.params;

	const deletedTodo = todosStore[id];

	delete todosStore[id];

	res.status(200).json(deletedTodo);
};

export const patchTodo: RequestHandler<{ id: string }> = (req, res) => {
	const { id } = req.params;

	const updatedTodo = todosStore[id];

	todosStore[id] = req.body;

	res.status(200).json(updatedTodo);
};
