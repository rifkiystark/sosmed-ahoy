import React, { Component } from "react";
import Card from "../card/Card";
import "./ModalComment.css";
import Text from "../text/Text";
import { FONT_WEIGHT } from "../../Const";
import { Icon, InlineIcon } from "@iconify/react";
import closeOutlined from "@iconify/icons-ant-design/close-outlined";
import Input from "../input/Input";
import ItemComment from "../itemcomment/ItemComment";
import CommentRepository from "../../repository/CommentRepository";

class ModalComment extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], shouldLoad: true };
    this.close = this.close.bind(this);
  }
  close() {
    this.props.onClose();
  }

  getComments = async (post_id) => {
    try {
      const commentResponse = await CommentRepository.get(post_id);
      const comments = commentResponse.data;
      if (comments.status) {
        this.setState({ comments: comments.data, shouldLoad: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate() {
    if (this.props.status) {
      if (this.state.shouldLoad) {
        this.getComments(this.props.postId);
      }
    }
  }

  render() {
    const { comments } = this.state;
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
            {comments.map((comment, index) => (
              <ItemComment key={index} comment={comment} />
            ))}
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
