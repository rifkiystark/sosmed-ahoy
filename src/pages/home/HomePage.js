import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { Ripple as Loading } from "react-spinners-css";
import CardPost from "../../components/cardpost/CardPost";

import "./HomePage.css";
import Text from "../../components/text/Text";
import { COLOR } from "../../Const";
import Card from "../../components/card/Card";
import ModalComment from "../../components/modalcomment/ModalComment";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [1, 2, 3, 4, 5],
      isShow: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.showComment = this.showComment.bind(this);
    this.closeComment = this.closeComment.bind(this);
  }

  fetchData = () => {
    let posts = this.state.posts;
    posts.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
    setTimeout(() => {
      this.setState({ posts: posts, statusModalComment: "hide" });
    }, 2000);
  };

  showComment = (id) => {
    console.log(id);
    this.setState({ isShow: true });
  };

  closeComment = () => {
    this.setState({ isShow: false });
  };

  render() {
    const { posts, isShow } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <ModalComment onClose={this.closeComment} status={isShow} />
        <div className="content">
          <InfiniteScroll
            dataLength={posts.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={true}
            loader={
              <div style={{ textAlign: "center", marginTop: 32 }}>
                <Loading size={32} color={COLOR.PRIMARY} />
                <Text>Loading...</Text>
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {posts.map((post, index) => (
              <CardPost
                key={index}
                showComment={() => this.showComment(index)}
              />
            ))}
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
