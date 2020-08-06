import axios from "axios";
import { BASE_URL_API } from "../Const";
import { getToken } from "../Helper";

const instance = axios.create({
  baseURL: BASE_URL_API + "/auth",
});

export default {
  login: async (username, password) => {
    return await instance({
      method: "POST",
      url: "/login",
      data: {
        username: username,
        password: password,
      },
      headers: {
        "content-type": "application/json", // override instance defaults
      },
    });
  },

  register: async (fullname, email, username, password) => {
    return await instance({
      method: "POST",
      url: "/register",
      data: {
        fullname: fullname,
        email: email,
        username: username,
        password: password,
      },
      headers: {
        "content-type": "application/json", // override instance defaults
      },
    });
  },

  me: async () => {
    return await instance({
      method: "GET",
      url: "/me",
      headers: {
        "content-type": "application/json",
        authorization: getToken(),
      },
    });
  },

  logout: async (token) => {
    return await instance({
      method: "POST",
      url: "/logout",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
  },
};
