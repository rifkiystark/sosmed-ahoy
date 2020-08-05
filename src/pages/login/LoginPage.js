import React, { Component } from "react";

import Card from "../../components/card/Card";
import Text from "../../components/text/Text";
import { COLOR, FONT_WEIGHT } from "../../Const";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import Alert from "../../components/alert/Alert";
import AuthRepository from "../../repository/AuthRepository";
import SimpleReactValidator from "simple-react-validator";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      username: "",
      password: "",
      alertMessage: "",
      isLoadingLogin: false,
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
    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return;
    }
    this.setState({ isLoadingLogin: true });
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
          isLoadingLogin: false,
          alertMessage: err.response.data.message,
        });
      }
    }
  };

  render() {
    const {
      username,
      password,
      alertMessage,
      showAlert,
      isLoadingLogin,
    } = this.state;
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
          <Alert show={showAlert} message={alertMessage} type="danger" />
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
            style={{ margonTop: 16 }}
            onChange={this.handleChange}
          />
          {this.validator.message("username", username, "required|alpha_num")}
          <Input
            value={password}
            type="password"
            name="password"
            placeholder="Masukkan password"
            style={{ marginTop: 16 }}
            onChange={this.handleChange}
          />
          {this.validator.message("password", password, "required|min:8")}
          <Button
            onClick={this.doLogin}
            loading={isLoadingLogin}
            style={{ marginTop: 16 }}
          >
            masuk
          </Button>
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
