import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";
import Routes from "./Routes";
import { BrowserView, MobileView } from "react-device-detect";

WebFont.load({
  google: {
    families: ["Open Sans"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserView>
      <Routes />
    </BrowserView>
    <MobileView>
      <h3
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
        }}
      >
        Bukanya di laptop gan
      </h3>
    </MobileView>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
