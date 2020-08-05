import axios from "axios";
import { BASE_URL_API } from "../Const";
import { getToken } from "../Helper";

const instance = axios.create({
  baseURL: BASE_URL_API + "/post",
});

export default {
  get: async (index) => {
    return await instance({
      method: "GET",
      url: "/" + index,
      headers: {
        "content-type": "application/json", // override instance defaults
        Authorization: getToken(),
      },
    });
  },

  getMe: async () => {
    return await instance({
      method: "GET",
      url: "/me",
      headers: {
        "content-type": "application/json", // override instance defaults
        Authorization: getToken(),
      },
    });
  },
};
