import { ITaskHandlerSpecs } from "../../node_modules/jrd_task_loader/dist";

import {
  checkEmailExists,
  createAccount,
  getApiCredentials,
  getResultData,
  loadGamesIcons,
  loadGamesList,
  loadGamesTrophiesList,
} from "./registerLoaderSteps";

/**
 * This is an example of the specifications for each task used by the task loader
 */
export const registerTasksSpecsList: Array<ITaskHandlerSpecs> = [
  {
    taskId: 1,
    taskName: "checkEmailExists",
    task: checkEmailExists,
    requestArgs: {
      requestArgsKeys: ["email"],
    },
  },
  {
    taskId: 2,
    taskName: "getApiCredentials",
    task: getApiCredentials,
    taskReturnData: {
      cacheData: false,
    },
  },
  {
    taskId: 3,
    taskName: "createAccount",
    task: createAccount,
    requestArgs: {
      requestArgsKeys: ["email", "password"],
    },
    taskReturnData: {
      cacheData: true,
    },
  },
  {
    taskId: 4,
    taskName: "loadGamesList",
    task: loadGamesList,
    prevTaskDataAsArg: {
      prevTaskId: 3,
      prevTaskDataArgs: ["user.id"],
    },
    taskReturnData: {
      cacheData: false,
    },
  },
  {
    taskId: 5,
    taskName: "loadGamesIcons",
    task: loadGamesIcons,
    prevTaskDataAsArg: {
      prevTaskId: 3,
      prevTaskDataArgs: ["user.id"],
    },
  },
  {
    taskId: 6,
    taskName: "loadGamesTrophiesList",
    task: loadGamesTrophiesList,
    prevTaskDataAsArg: {
      prevTaskId: 3,
      prevTaskDataArgs: ["user.id"],
    },
  },
  {
    taskId: 7,
    taskName: "getResultData",
    task: getResultData,
    prevTaskDataAsArg: {
      prevTaskId: 3,
      prevTaskDataArgs: ["user"],
    },
    taskReturnData: {
      cacheData: false,
    },
  },
];
