import React, { Component } from "react";
import Card from "../../components/card/Card";
import Avatar from "../../components/avatar/Avatar";
import Text from "../../components/text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";

import { Icon, InlineIcon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import heartFilled from "@iconify/icons-ant-design/heart-filled";
import commentOutlined from "@iconify/icons-ant-design/comment-outlined";

import moment from "moment";
import "moment/locale/id";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./CardPost.css";
import LikeRepository from "../../repository/LikeRepository";

class CardPost extends Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post };
    this.onLike = this.onLike.bind(this);
  }

  onLike = () => {
    const post = this.state.post;
    post.isLiked = !post.isLiked;
    if (post.isLiked) {
      post.totalLike += 1;
      LikeRepository.like(post._id);
    } else if (!post.isLiked) {
      post.totalLike -= 1;
      LikeRepository.dislike(post._id);
    }
    this.setState({ post: post });
  };
  render() {
    const { post } = this.state;
    return (
      <Card
        style={{ width: 620, margin: "24px auto 0 auto", overflow: "auto" }}
      >
        <div>
          <Avatar
            className="avatar-card-post"
            url={post.user_id.profilePicture}
          />
          <div className="header-card-post">
            <Text fontWeight={FONT_WEIGHT.BOLD}>{post.user_id.fullname}</Text>
            <Text size={14}>
              {moment(post.createdAt).locale("id").fromNow()}
            </Text>
          </div>
        </div>
        <LazyLoadImage
          className="imgpost-card-post"
          height={620}
          effect="blur"
          src={post.imgsrc} // use normal <img> attributes as props
          width={620}
        />
        <div className="footer-card-post">
          <div className="btn-like-post" onClick={this.onLike}>
            {post.isLiked ? (
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
              {`${post.totalLike} Suka`}
            </Text>
          </div>
          <div
            className="btn-comment-post"
            onClick={() => this.props.showComment()}
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
              {`${post.totalComment} Suka`}
            </Text>
          </div>
        </div>
        <Text
          fontWeight={FONT_WEIGHT.SEMI_BOLD}
          size={14}
          style={{ margin: 24 }}
        >
          {post.caption}
        </Text>
      </Card>
    );
  }
}

export default CardPost;
