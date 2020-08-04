import moment from "moment";

const isLoggedIn = () => {
  return localStorage.getItem("token") ? true : false;
};

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (isLoggedIn()) {
      next();
    }
    next.redirect("/login");
  } else {
    if (!isLoggedIn()) {
      next();
    }
    next.redirect("/");
  }
};

const getToken = () => {
  return `${localStorage.getItem("type")} ${localStorage.getItem("token")}`;
};

const dateFromNow = (date) => {
  moment.updateLocale("en", {
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lalu",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });
};

export { requireLogin, isLoggedIn, getToken };
