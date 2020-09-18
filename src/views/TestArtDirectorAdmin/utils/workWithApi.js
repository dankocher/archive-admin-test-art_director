import ajax from "../../../utils/ajax";
import { api } from "../../../constants/api";

export const getUrlId = () => {
  const urlPath = window.location.pathname.split("/");
  return urlPath[urlPath.length - 1];
};

export const getNewTaskId = () => {
  getNewTaskFromServer().then((res) => {
    return res._id;
  });
};

export const getTasksFromServer = async () => {
  const res = await ajax(api.td_get_tasks, {});
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res;
};

export const getTaskFromServer = async () => {
  const res = await ajax(api.td_get_task, {
    _id: getUrlId(),
  });
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res.task;
};

export const getNewTaskFromServer = async () => {
  const res = await ajax(api.td_save_task, {});
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res.task;
};

export const deleteTaskById = async (id) => {
  const res = await ajax(api.td_delete_task, {
    _id: id,
  });
  if (!res.ok) {
    console.log("Bad response");
    return;
  }
  return res;
};

export const saveTaskListHeader = async (name) => {
  const res = await ajax(api.td_tsave, {
    name: name,
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

  if (!state.isUpdatedLocally) {
    console.log("net");
    return;
  }
  // console.log("ieto tesk");
  // console.log(state);
  // console.log("ieto tesk");
  // console.log("da ia sohranilsia");
  saveTask(state.task);
};
