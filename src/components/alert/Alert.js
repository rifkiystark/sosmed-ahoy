import React, { Component } from "react";
import Card from "../card/Card";
import { FONT_WEIGHT, COLOR } from "../../Const";
import Text from "../text/Text";

class Alert extends Component {
  render() {
    const visible = this.props.show ? "block" : "none";
    return (
      <Card
        style={{
          background: COLOR.RED,
          padding: 8,
          marginBottom: 8,
          display: visible,
        }}
      >
        <Text fontWeight={FONT_WEIGHT.SEMI_BOLD} color={COLOR.WHITE}>
          {this.props.message}
        </Text>
      </Card>
    );
  }
}

export default Alert;
