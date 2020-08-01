import React, { Component } from "react";

import Text from "../text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";

class ItemComment extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          padding: "8px 16px 8px 16px",
          borderBottom: "1px solid #c4c4c4",
        }}
      >
        <Text fontWeight={FONT_WEIGHT.SEMI_BOLD} size={14}>
          Ananda
        </Text>
        <Text size={14}>Ini adalah komentar</Text>
        <Text size={12} color={COLOR.GRAY}>
          1 Jam yang lalu
        </Text>
      </div>
    );
  }
}

export default ItemComment;
