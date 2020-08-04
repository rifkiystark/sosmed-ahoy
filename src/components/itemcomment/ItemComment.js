import React, { Component } from "react";

import Text from "../text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";
import moment from "moment";
import "moment/locale/id";
class ItemComment extends Component {
  state = {};
  render() {
    const { comment } = this.props;
    return (
      <div
        style={{
          padding: "8px 16px 8px 16px",
          borderBottom: "1px solid #c4c4c4",
        }}
      >
        <Text fontWeight={FONT_WEIGHT.SEMI_BOLD} size={14}>
          {comment.user_id.fullname}
        </Text>
        <Text size={14}>{comment.comment}</Text>
        <Text size={12} color={COLOR.GRAY}>
          {moment(comment.createdAt).locale("id").fromNow()}
        </Text>
      </div>
    );
  }
}

export default ItemComment;
