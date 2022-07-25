import express from "express";
import {
	createTodo,
	deleteTodo,
	getTodos,
	patchTodo
} from "../controllers/todo.js";

const todoRouter = express.Router({ mergeParams: true });

todoRouter.route("/").get(getTodos).post(createTodo);

todoRouter.route("/:id").delete(deleteTodo).patch(patchTodo);

export default todoRouter;
