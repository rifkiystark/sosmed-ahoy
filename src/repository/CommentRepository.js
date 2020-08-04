import axios from "axios";
import { BASE_URL_API } from "../Const";
import { getToken } from "../Helper";

const instance = axios.create({
  baseURL: BASE_URL_API + "/comment",
});

export default {
  get: async (post_id) => {
    console.log("repo" + post_id);
    return await instance({
      method: "GET",
      url: "/",
      params: {
        post_id: post_id,
      },
      headers: {
        "content-type": "application/json", // override instance defaults
        Authorization: getToken(),
      },
    });
  },

  post: async (post_id, comment) => {
    return await instance({
      method: "POST",
      url: "/",
      data: {
        post_id,
        comment,
      },
      headers: {
        "content-type": "application/json", // override instance defaults
        Authorization: getToken(),
      },
    });
  },
};
