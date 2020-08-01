import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card/Card";
import Text from "../../components/text/Text";
import { COLOR, FONT_WEIGHT } from "../../Const";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.goToRegister = this.goToRegister.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  goToRegister() {
    this.props.history.push("/register");
  }

  doLogin() {}

  render() {
    const { username, password } = this.state;
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
