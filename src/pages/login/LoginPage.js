import React, { Component } from "react";

import Card from "../../components/card/Card";
import Text from "../../components/text/Text";
import { COLOR, FONT_WEIGHT } from "../../Const";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import axios from "axios";
import Alert from "../../components/alert/Alert";
import AuthRepository from "../../repository/AuthRepository";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      alertMessage: "",
      showAlert: false,
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.goToRegister = this.goToRegister.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  goToRegister = () => {
    this.props.history.push("/register");
  };

  doLogin = async () => {
    try {
      const dataLogin = await AuthRepository.login(
        this.state.username,
        this.state.password
      );
      localStorage.setItem("token", dataLogin.data.data.token);
      localStorage.setItem("type", dataLogin.data.data.type);
      this.props.history.push("/");
    } catch (err) {
      if (err.response) {
        this.setState({
          showAlert: true,
          alertMessage: err.response.data.message,
        });
      }
    }
  };

  render() {
    const { username, password, alertMessage, showAlert } = this.state;
    return (
      <React.Fragment>
        <Text
          color={COLOR.BLACK}
          size={32}
          fontWeight={FONT_WEIGHT.BOLD}
          style={{ textAlign: "center", marginTop: 48, marginBottom: 48 }}
        >
          Sosmed Ahoyy
        </Text>
        <Card style={{ padding: 42, margin: "0 auto", width: 480 }}>
          <Alert show={showAlert} message={alertMessage} />
          <Text
            size={32}
            fontWeight={FONT_WEIGHT.BOLD}
            style={{ marginBottom: 16 }}
          >
            Masuk
          </Text>
          <Input
            value={username}
            placeholder="Masukkan username"
            name="username"
            style={{ marginBottom: 16 }}
            onChange={this.handleChange}
          />
          <Input
            value={password}
            type="password"
            name="password"
            placeholder="Masukkan password"
            style={{ marginBottom: 16 }}
            onChange={this.handleChange}
          />
          <Button onClick={this.doLogin}>Masuk</Button>
          <Text
            fontWeight={FONT_WEIGHT.BOLD}
            style={{ textAlign: "center", margin: 16 }}
          >
            atau
          </Text>
          <Button type="secondary" onClick={this.goToRegister}>
            daftar
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}

export default LoginPage;
