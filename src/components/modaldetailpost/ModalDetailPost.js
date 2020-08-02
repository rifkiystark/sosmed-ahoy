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

class ModalDetailPost extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  close = () => {
    this.props.onClose();
  };
  render() {
    const { isLiked } = this.state;
    const { status } = this.props;
    const className = status ? "show" : "hide";
    return (
      <div className={`wrapper-detail-post ${className}`}>
        <Card className="card-detail-post">
          <img
            className="img-detail-post"
            src="https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png"
          />
          <div className="wrapper-comment-detail-post">
            <div className="header-detail-post">
              <div className="btn-like-post" onClick={this.onLike}>
                {isLiked ? (
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
                  12 Suka
                </Text>
              </div>
              <div
                className="btn-comment-post"
                onClick={this.props.showComment}
              >
                <Icon
                  icon={commentOutlined}
                  style={{ fontSize: "32px", float: "left" }}
                />
                <Text
                  style={{ float: "left", margin: 6 }}
                  fontWeight={FONT_WEIGHT.SEMI_BOLD}
                  size={14}
                >
                  12 Komentar
                </Text>
              </div>
              <Icon
                onClick={this.close}
                icon={closeOutlined}
                style={{
                  fontSize: "24px",
                  float: "right",
                  cursor: "pointer",
                  padding: 4,
                }}
              />
            </div>
            <div className="content-detail-post">
              <Text
                fontWeight={FONT_WEIGHT.SEMI_BOLD}
                size={14}
                style={{ padding: 16, borderBottom: "1px solid #c4c4c4" }}
              >
                Engkau tetap gagah melawan ombak dan perjuangan hidup ini demi
                mencapai pada kebahagiaan keluargamu, dimana diwaktu tertentu
                dirimu tersungkur dan terjatuh, tetapi semangatmu tetap terus
                berkobar sehingga membuatmu kembali berdiri demi hidup istri dan
                anakmu.
              </Text>
              <ItemComment />
              <ItemComment />
              <ItemComment />
              <ItemComment />
              <ItemComment />
              <ItemComment />
              <ItemComment />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default ModalDetailPost;
