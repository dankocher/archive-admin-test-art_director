import ajax from "../../../utils/ajax";
import { api } from "../../../constants/api";
import { WELCOME_SCREEN } from "../helpers/taskTypes/taskTypes";

export const getUrlId = () => {
  const urlPath = window.location.pathname.split("/");
  return urlPath[urlPath.length - 1];
};

export const getNewTaskId = () => {
  getNewTaskFromServer().then((res) => {
    return res._id;
  });
};

export const getTasksFromServer = async (_id) => {
  const res = await ajax(api.td_get_tasks, { tt_id: _id });
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res;
};

export const getTaskFromServer = async (testId) => {
  const res = await ajax(api.td_get_task, {
    _id: getUrlId(),
    tt_id: testId,
  });
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res.task;
};

export const getNewTaskFromServer = async (
  tt_id,
  task_number,
  type = WELCOME_SCREEN
) => {
  const res = await ajax(api.td_save_task, {
    task: { tt_id, task_number, type },
  });
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res.task;
};

export const deleteTaskById = async (id, testId) => {
  const res = await ajax(api.td_delete_task, {
    _id: id,
    tt_id: testId,
  });
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  console.log(res);
  return res;
};

export const saveTaskListHeader = async (_id, name) => {
  const res = await ajax(api.td_tsave, {
    _id,
    name,
  });
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res;
};

export const saveTask = async (task) => {
  const res = await ajax(api.td_save_task, {
    task: task,
  });
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res;
};

export const handlerSaveTaskToDB = (state) => {
  // console.log("aaaa");

  // if (!state.isUpdatedLocally) {
  //   console.log("net");
  //   return;
  // }
  // console.log("ieto tesk");
  // console.log(state);
  // console.log("ieto tesk");
  // console.log("da ia sohranilsia");
  return saveTask(state.task);
};
