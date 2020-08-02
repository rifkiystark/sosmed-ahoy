import React, { Component } from "react";
import "./Navbar.css";
import { withRouter } from "react-router-dom";
import Text from "../text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";
import Avatar from "../avatar/Avatar";

class Navbar extends Component {
  goToProfile = () => {
    this.props.history.push("/me");
  };
  goToHome = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="navbar">
        <Text
          style={{
            marginTop: 12,
            float: "left",
            marginLeft: 24,
            cursor: "pointer",
          }}
          fontWeight={FONT_WEIGHT.BOLD}
          size={24}
          color={COLOR.WHITE}
          onClick={this.goToHome}
        >
          Sosmed Ahoy
        </Text>
        <div
          style={{ float: "right", margin: 12, cursor: "pointer" }}
          onClick={this.goToProfile}
        >
          <Avatar size={32} style={{ float: "left" }} />
          <Text
            style={{ float: "left", margin: 6 }}
            fontWeight={FONT_WEIGHT.BOLD}
            color={COLOR.WHITE}
          >
            Ananda Rifkiy Hasan
          </Text>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
