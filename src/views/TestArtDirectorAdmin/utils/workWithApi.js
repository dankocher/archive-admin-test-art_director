import ajax from "../../../utils/ajax";
import { api } from "../../../constants/api";

export const getUrlId = () => {
  const urlPath = window.location.pathname.split("/");
  return urlPath[urlPath.length - 1];
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
