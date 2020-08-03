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

export { requireLogin, isLoggedIn };
