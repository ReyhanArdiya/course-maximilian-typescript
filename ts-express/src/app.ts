import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import todoRouter from "./routers/todo.js";

const app = express();
app.use(bodyParser.json());

app.use("/todos", todoRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

app.listen(3000);
