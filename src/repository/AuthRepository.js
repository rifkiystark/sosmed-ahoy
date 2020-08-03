import axios from "axios";
import { BASE_URL_API } from "../Const";

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
    await instance({
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

  me: async (token) => {
    await instance({
      method: "GET",
      url: "/me",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
  },

  logout: async (token) => {
    await instance({
      method: "POST",
      url: "/logout",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
  },
};
