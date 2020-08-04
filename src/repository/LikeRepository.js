import axios from "axios";
import { BASE_URL_API } from "../Const";
import { getToken } from "../Helper";

const instance = axios.create({
  baseURL: BASE_URL_API + "/like",
});

export default {
  like: async (post_id) => {
    return await instance({
      method: "POST",
      url: "/",
      data: {
        post_id: post_id,
      },
      headers: {
        "content-type": "application/json", // override instance defaults
        Authorization: getToken(),
      },
    });
  },

  dislike: async (post_id) => {
    return await instance({
      method: "DELETE",
      url: "/",
      data: {
        post_id: post_id,
      },
      headers: {
        "content-type": "application/json", // override instance defaults
        Authorization: getToken(),
      },
    });
  },
};
