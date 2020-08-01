import React, { Component } from "react";

import Card from "../../components/card/Card";
import Text from "../../components/text/Text";
import { COLOR, FONT_WEIGHT } from "../../Const";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fullname: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  goToLogin() {
    this.props.history.push("/login");
  }

  doLogin() {}

  render() {
    const { username, password, fullname, email } = this.state;
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
          <Text
            size={32}
            fontWeight={FONT_WEIGHT.BOLD}
            style={{ marginBottom: 16 }}
          >
            Daftar
          </Text>
          <Input
            value={fullname}
            placeholder="Masukkan nama anda"
            name="fullname"
            style={{ marginBottom: 16 }}
            onChange={this.handleChange}
          />
          <Input
            value={email}
            placeholder="Masukkan email anda"
            name="email"
            style={{ marginBottom: 16 }}
            onChange={this.handleChange}
          />
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
          <Button onClick={this.doLogin}>daftar</Button>
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
