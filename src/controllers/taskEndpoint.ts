import { Request, Response } from "express";

import { registerTasksSpecsList } from "@/example/registerTasksSpecsList";
import {
  handleResponse,
  taskHandler,
  taskHandlerWrapper,
} from "jrd_task_handler";

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
