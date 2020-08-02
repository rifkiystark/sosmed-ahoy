import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Avatar from "../../components/avatar/Avatar";

import "./ProfilePage.css";
import Text from "../../components/text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";
import ImgPost from "../../components/imgpost/ImgPost";
import ModalDetailPost from "../../components/modaldetailpost/ModalDetailPost";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpenDetailPost: false };
    // this.openDetailPost = this.openDetailPost.bind(this);
    // this.closeDetailPost = this.closeDetailPost.bind(this);
  }

  openDetailPost = (id) => {
    this.setState({ isOpenDetailPost: true });
  };

  closeDetailPost = () => {
    this.setState({ isOpenDetailPost: false });
  };
  render() {
    const { isOpenDetailPost } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <ModalDetailPost
          status={isOpenDetailPost}
          onClose={this.closeDetailPost}
        />
        <Card className="card-profile">
          <Avatar className="avatar-profile" size={128} />
          <Text style={{ marginTop: 16 }} fontWeight={FONT_WEIGHT.BOLD}>
            Ananda Rifkiy Hasan
          </Text>
          <Text>ananda.rifkiy32@gmail.com</Text>
          <div className="header-post-profile">
            <Text fontWeight={FONT_WEIGHT.BOLD} color={COLOR.WHITE}>
              32 Post
            </Text>
          </div>
          <div style={{ overflow: "auto", padding: 2 }}>
            <ImgPost onClick={() => this.openDetailPost(1)} />
            <ImgPost onClick={() => this.openDetailPost(1)} />
            <ImgPost onClick={() => this.openDetailPost(1)} />
            <ImgPost onClick={() => this.openDetailPost(1)} />
            <ImgPost onClick={() => this.openDetailPost(1)} />
            <ImgPost onClick={() => this.openDetailPost(1)} />
          </div>
        </Card>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
