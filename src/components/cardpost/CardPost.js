import React, { Component } from "react";
import Card from "../../components/card/Card";
import Avatar from "../../components/avatar/Avatar";
import Text from "../../components/text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";

import { Icon, InlineIcon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import heartFilled from "@iconify/icons-ant-design/heart-filled";
import commentOutlined from "@iconify/icons-ant-design/comment-outlined";

import "./CardPost.css";

class CardPost extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
    this.onLike = this.onLike.bind(this);
  }

  onLike = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };
  render() {
    const { isLiked } = this.state;
    return (
      <Card
        style={{ width: 620, margin: "24px auto 0 auto", overflow: "auto" }}
      >
        <div>
          <Avatar className="avatar-card-post" />
          <div className="header-card-post">
            <Text fontWeight={FONT_WEIGHT.BOLD}>Ananda Rifkiy Hasan</Text>
            <Text size={14}>12 Menit yang lalu</Text>
          </div>
        </div>
        <img
          className="imgpost-card-post"
          src="https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png"
        />
        <div className="footer-card-post">
          <div className="btn-like-post" onClick={this.onLike}>
            {isLiked ? (
              <Icon
                icon={heartFilled}
                style={{ color: COLOR.RED, fontSize: "32px", float: "left" }}
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
          <div className="btn-comment-post" onClick={this.props.showComment}>
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
        </div>
        <Text
          fontWeight={FONT_WEIGHT.SEMI_BOLD}
          size={14}
          style={{ margin: 24 }}
        >
          Engkau tetap gagah melawan ombak dan perjuangan hidup ini demi
          mencapai pada kebahagiaan keluargamu, dimana diwaktu tertentu dirimu
          tersungkur dan terjatuh, tetapi semangatmu tetap terus berkobar
          sehingga membuatmu kembali berdiri demi hidup istri dan anakmu.
        </Text>
      </Card>
    );
  }
}

export default CardPost;
