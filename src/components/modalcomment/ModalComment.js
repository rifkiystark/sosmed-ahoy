import React, { Component } from "react";
import Card from "../card/Card";
import "./ModalComment.css";
import Text from "../text/Text";
import { FONT_WEIGHT } from "../../Const";
import { Icon, InlineIcon } from "@iconify/react";
import closeOutlined from "@iconify/icons-ant-design/close-outlined";
import Input from "../input/Input";
import ItemComment from "../itemcomment/ItemComment";

class ModalComment extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }
  close() {
    this.props.onClose();
  }

  render() {
    const { status } = this.props;
    const classModal = status ? "show" : "hide";
    return (
      <div className={`wrapper-comment ${classModal}`}>
        <Card className="modal-comment">
          <div className="header-modal-comment">
            <Text fontWeight={FONT_WEIGHT.SEMI_BOLD} style={{ float: "left" }}>
              Komentar
            </Text>
            <Icon
              onClick={this.close}
              icon={closeOutlined}
              style={{ fontSize: "24px", float: "right", cursor: "pointer" }}
            />
          </div>
          <div className="content-modal-comment">
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
            <ItemComment />
          </div>
          <div className="footer-modal-comment">
            <Input placeholder="Ketik komentar disini" />
          </div>
        </Card>
      </div>
    );
  }
}

export default ModalComment;
