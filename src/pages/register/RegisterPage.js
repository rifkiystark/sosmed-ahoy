import React, { Component } from "react";

import Card from "../../components/card/Card";
import Text from "../../components/text/Text";
import { COLOR, FONT_WEIGHT } from "../../Const";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import AuthRepository from "../../repository/AuthRepository";
import Alert from "../../components/alert/Alert";
import SimpleReactValidator from "simple-react-validator";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state = {
      username: "",
      password: "",
      fullname: "",
      email: "",
      showAlert: false,
      alertMessage: "",
      alertType: "danger",
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.goToLogin = this.goToLogin.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  goToLogin = () => {
    this.props.history.push("/login");
  };

  doRegister = async () => {
    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return;
    }
    try {
      const { fullname, email, username, password } = this.state;
      const register = await AuthRepository.register(
        fullname,
        email,
        username,
        password
      );
      if (register) {
        this.setState({
          showAlert: true,
          alertType: "success",
          alertMessage:
            "Registrasi berhasil !\nMohon cek email untuk verifikasi",
        });
        console.log(register);
      }
    } catch (err) {
      if (err.response) {
        let errorResponse = "";
        const { data } = err.response.data;
        if (data.email) errorResponse += data.email + "\n";
        if (data.username) errorResponse += data.username;
        this.setState({
          showAlert: true,
          alertMessage: errorResponse,
          alertType: "danger",
        });
      }
    }
  };

  render() {
    const {
      username,
      password,
      fullname,
      email,
      showAlert,
      alertMessage,
      alertType,
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
        <Card style={{ padding: 42, margin: "0 auto 48px auto", width: 480 }}>
          <Alert show={showAlert} message={alertMessage} type={alertType} />
          <Text size={32} fontWeight={FONT_WEIGHT.BOLD}>
            Daftar
          </Text>
          <Input
            value={fullname}
            placeholder="Masukkan nama anda"
            name="fullname"
            style={{ marginTop: 16 }}
            onChange={this.handleChange}
          />
          {this.validator.message("fullname", fullname, "required|alpha_space")}
          <Input
            value={email}
            placeholder="Masukkan email anda"
            name="email"
            style={{ marginTop: 16 }}
            onChange={this.handleChange}
          />
          {this.validator.message("email", email, "required|email")}
          <Input
            value={username}
            placeholder="Masukkan username"
            name="username"
            style={{ marginTop: 16 }}
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
          <Button onClick={this.doRegister} style={{ marginTop: 16 }}>
            daftar
          </Button>
          <Text
            fontWeight={FONT_WEIGHT.BOLD}
            style={{ textAlign: "center", margin: 16 }}
          >
            atau
          </Text>
          <Button type="secondary" onClick={this.goToLogin}>
            masuk
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}

export default RegisterPage;
