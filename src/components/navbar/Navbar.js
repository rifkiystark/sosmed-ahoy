import React, { Component } from "react";
import "./Navbar.css";
import Text from "../text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";
import Card from "../card/Card";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Text
          style={{ marginTop: 12, float: "left", marginLeft: 24 }}
          fontWeight={FONT_WEIGHT.BOLD}
          size={24}
          color={COLOR.WHITE}
        >
          Sosmed Ahoy
        </Text>
      </div>
    );
  }
}

export default Navbar;
