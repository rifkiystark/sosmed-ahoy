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
    this.state = {
      comments: [],
      shouldLoad: true,
      postId: "",
      comment: "",
    };
    this.close = this.close.bind(this);
  }
  close() {
    this.props.onClose(this.state.postId, this.state.comments.length);
    this.setState({ comments: [], shouldLoad: true, postId: "", comment: "" });
  }

  getComments = async (post_id) => {
    try {
      const commentResponse = await CommentRepository.get(post_id);
      const comments = commentResponse.data;
      if (comments.status) {
        this.setState({
          comments: comments.data,
          shouldLoad: false,
          postId: post_id,
        });
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

  postComment = async (e) => {
    try {
      const { postId, comment } = this.state;
      const postDataComment = await CommentRepository.post(postId, comment);
      console.log(postDataComment);
      const responseComment = postDataComment.data;
      if (responseComment.status) {
        this.setState({ comment: "" });
        this.getComments(postId);
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.postComment(e);
    }
  };

  render() {
    const { comments, comment } = this.state;
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
            <Input
              name="comment"
              value={comment}
              placeholder="Ketik komentar disini"
              onKeyPress={this.onKeyPress}
              onChange={this.handleChange}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default ModalComment;
