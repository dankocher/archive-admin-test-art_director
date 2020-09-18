const host = {
  uri:
    window.location.port === "5000" || window.location.port === "3000"
      ? "https://wpdev.goodstudio.by"
      : "",
  // uri: "https://wpdev.goodstudio.by"
  // uri: window.location.port === "3000" ? "https://wpdev.goodstudio.by" : ""
  // uri: "https://wp.goodstudio.by"
};

const api = {
  td_tsave: { method: "POST", uri: "/api/td/td_tsave" },
  td_get_tasks: { method: "GET", uri: "/api/td/get" },
  td_get_task: { method: "GET", uri: "/api/td/get/:_id" },
  td_save_task: { method: "POST", uri: "/api/td/save" },
  td_delete_task: { method: "DELETE", uri: "/api/td/delete/:_id" },
  td_sort_tasks: { method: "POST", uri: "/api/td/sort" },
};

export { host, api };
