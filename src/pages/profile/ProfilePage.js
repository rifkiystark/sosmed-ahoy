import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Avatar from "../../components/avatar/Avatar";

import "./ProfilePage.css";
import Text from "../../components/text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";
import ImgPost from "../../components/imgpost/ImgPost";
import ModalDetailPost from "../../components/modaldetailpost/ModalDetailPost";
import AuthRepository from "../../repository/AuthRepository";
import PostRepository from "../../repository/PostRepository";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDetailPost: false,
      user: {},
      posts: [],
      activePost: {},
    };
    // this.openDetailPost = this.openDetailPost.bind(this);
    // this.closeDetailPost = this.closeDetailPost.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getPost();
  }

  openDetailPost = (post) => {
    this.setState({ isOpenDetailPost: true, activePost: post });
  };

  closeDetailPost = () => {
    this.setState({ isOpenDetailPost: false });
  };

  getUser = async () => {
    try {
      const user = await AuthRepository.me();
      this.setState({ user: user.data.data });
      console.log(this.state.user);
    } catch (err) {}
  };

  getPost = async () => {
    try {
      const posts = await PostRepository.getMe();
      console.log(posts);
      this.setState({ posts: posts.data.data.posts });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { isOpenDetailPost, user, posts, activePost } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <ModalDetailPost
          status={isOpenDetailPost}
          onClose={this.closeDetailPost}
          post={activePost}
        />
        <Card className="card-profile">
          <Avatar
            className="avatar-profile"
            size={128}
            url={user.profilePicture}
          />
          <Text style={{ marginTop: 16 }} fontWeight={FONT_WEIGHT.BOLD}>
            {user.fullname}
          </Text>
          <Text>{user.email}</Text>
          <div className="header-post-profile">
            <Text fontWeight={FONT_WEIGHT.BOLD} color={COLOR.WHITE}>
              {`${posts.length} Post`}
            </Text>
          </div>
          <div style={{ overflow: "auto", padding: 2 }}>
            {posts.map((post, index) => (
              <ImgPost
                key={index}
                post={post}
                onClick={() => this.openDetailPost(post)}
              />
            ))}
          </div>
        </Card>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
