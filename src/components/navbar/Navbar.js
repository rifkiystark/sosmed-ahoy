import React, { Component } from "react";
import "./Navbar.css";
import { withRouter, Link } from "react-router-dom";
import Text from "../text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";
import Avatar from "../avatar/Avatar";
import Dropdown from "../dropdown/Dropdown";
import AuthRepository from "../../repository/AuthRepository";
import data from "@iconify/icons-ant-design/heart-outlined";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  goToProfile = () => {
    this.props.history.push("/me");
  };
  goToHome = () => {
    this.props.history.push("/");
  };
  logout = async () => {
    const token = localStorage.getItem("token");
    const type = localStorage.getItem("type");
    localStorage.clear();
    this.props.history.push("/login");
    try {
      const isLogout = await AuthRepository.logout(`${type} ${token}`);
    } catch (err) {
      console.log("gagal");
    }
  };

  componentDidMount() {
    this.getMe();
  }

  getMe = async () => {
    try {
      const user = await AuthRepository.me();
      console.log(user);
      this.setState({ user: user.data.data });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { user } = this.state;
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
              <Avatar
                size={32}
                style={{ float: "left" }}
                url={user.profilePicture}
              />
              <Text
                style={{ float: "left", margin: 6 }}
                fontWeight={FONT_WEIGHT.BOLD}
                color={COLOR.WHITE}
              >
                {user.fullname}
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
