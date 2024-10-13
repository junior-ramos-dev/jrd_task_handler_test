import { Request, Response } from "express";

import {
  taskHandlerWrapper,
  handleResponse,
  taskHandler,
} from "../../node_modules/jrd_task_handler/dist";

import { registerTasksSpecsList } from "@/example/registerTasksSpecsList";

export const taskEndpoint = async (req: Request, res: Response) => {
  const requestArgs: object = req.body;

  const result = await taskHandlerWrapper(
    taskHandler,
    requestArgs,
    registerTasksSpecsList
  );

  console.log("result:", result);

  handleResponse(result, res);
};
