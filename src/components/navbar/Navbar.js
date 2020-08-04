import React, { Component } from "react";
import "./Navbar.css";
import { withRouter, Link } from "react-router-dom";
import Text from "../text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";
import Avatar from "../avatar/Avatar";
import Dropdown from "../dropdown/Dropdown";
import AuthRepository from "../../repository/AuthRepository";

class Navbar extends Component {
  goToProfile = () => {
    this.props.history.push("/me");
  };
  goToHome = () => {
    this.props.history.push("/");
  };
  logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const type = localStorage.getItem("type");
      const isLogout = await AuthRepository.logout(`${type} ${token}`);
      console.log(isLogout);
      if (isLogout) {
        console.log("jadi");
        localStorage.clear();
        this.props.history.push("/login");
      }
    } catch (err) {
      console.log("gagal");
    }
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
        <Dropdown
          style={{ float: "right" }}
          title={
            <div
              style={{
                margin: 12,
                cursor: "pointer",
                overflow: "auto",
              }}
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
          }
        >
          <div className="item-navbar-dropdown" onClick={this.goToProfile}>
            <Text>Profile Saya</Text>
          </div>
          <div className="item-navbar-dropdown" onClick={this.logout}>
            <Text>Keluar</Text>
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default withRouter(Navbar);
