import React, { Component } from "react";
import Card from "../card/Card";
import { Icon } from "@iconify/react";
import closeOutlined from "@iconify/icons-ant-design/close-outlined";
import { FONT_WEIGHT, COLOR } from "../../Const";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import heartFilled from "@iconify/icons-ant-design/heart-filled";
import commentOutlined from "@iconify/icons-ant-design/comment-outlined";
import "./ModalDetailPost.css";
import Text from "../text/Text";
import ItemComment from "../itemcomment/ItemComment";
import CommentRepository from "../../repository/CommentRepository";

class ModalDetailPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      shouldLoad: true,
    };
  }

  close = () => {
    this.setState({ comments: [], shouldLoad: true });
    this.props.onClose();
  };

  getComments = async (post_id) => {
    try {
      const commentResponse = await CommentRepository.get(post_id);
      const comments = commentResponse.data;
      if (comments.status) {
        this.setState({
          comments: comments.data.comments,
          shouldLoad: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate() {
    if (this.props.status) {
      if (this.state.shouldLoad) {
        this.getComments(this.props.post._id);
      }
    }
  }
  render() {
    const { comments, shouldLoad } = this.state;
    const { status, post } = this.props;
    const className = status ? "show" : "hide";
    return (
      <div className={`wrapper-detail-post ${className}`}>
        <Card className="card-detail-post">
          <img className="img-detail-post" src={post.imgsrc} />
          <div className="wrapper-comment-detail-post">
            <div className="header-detail-post">
              <div className="btn-like-post">
                {post.isLiked ? (
                  <Icon
                    icon={heartFilled}
                    style={{
                      color: COLOR.RED,
                      fontSize: "32px",
                      float: "left",
                    }}
                  />
                ) : (
                  <Icon
                    icon={heartOutlined}
                    style={{ fontSize: "32px", float: "left" }}
                  />
                )}
                <Text
                  style={{ float: "left", margin: 6 }}
                  fontWeight={FONT_WEIGHT.SEMI_BOLD}
                  size={14}
                >
                  {`${post.totalLike} Suka`}
                </Text>
              </div>
              <div className="btn-comment-post">
                <Icon
                  icon={commentOutlined}
                  style={{ fontSize: "32px", float: "left" }}
                />
                <Text
                  style={{ float: "left", margin: 6 }}
                  fontWeight={FONT_WEIGHT.SEMI_BOLD}
                  size={14}
                >
                  {`${post.totalComment} Komentar`}
                </Text>
              </div>
              <Icon
                onClick={this.close}
                icon={closeOutlined}
                style={{
                  fontSize: "24px",
                  float: "right",
                  padding: 4,
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="content-detail-post">
              <Text
                fontWeight={FONT_WEIGHT.SEMI_BOLD}
                size={14}
                style={{ padding: 16, borderBottom: "1px solid #c4c4c4" }}
              >
                {post.caption}
              </Text>
              {comments.map((comment, index) => (
                <ItemComment key={index} comment={comment} />
              ))}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default ModalDetailPost;
