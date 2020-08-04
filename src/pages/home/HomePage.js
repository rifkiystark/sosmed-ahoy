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
import PostRepository from "../../repository/PostRepository";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isShow: false,
      index: 0,
      hasMore: true,
      activePost: "",
    };
    //this.fetchData = this.fetchData.bind(this);
    //this.showComment = this.showComment.bind(this);
    //this.closeComment = this.closeComment.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const postsResponse = await PostRepository.get(this.state.index);
      const { data, nextIndex } = postsResponse.data;
      const hasMore = nextIndex != null ? true : false;
      const newPost = this.state.posts.concat(data);
      console.log(newPost);
      this.setState({
        posts: newPost,
        statusModalComment: "hide",
        hasMore,
        index: nextIndex,
      });
      console.log(this.state.hasMore);
    } catch (err) {
      console.log(err.response);
    }
  };

  showComment = (id) => {
    this.setState({ isShow: true, activePost: id });
  };

  closeComment = (idPost, totalComment) => {
    const { posts } = this.state;
    const indexPost = posts.findIndex((post) => post._id == idPost);
    posts[indexPost].totalComment = totalComment;
    this.setState({ isShow: false, activePost: "", posts });
  };

  render() {
    const { posts, isShow, hasMore, activePost } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <ModalComment
          onClose={this.closeComment}
          status={isShow}
          postId={activePost}
        />
        <div className="content">
          <InfiniteScroll
            dataLength={posts.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={hasMore}
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
                post={post}
                showComment={() => this.showComment(post._id)}
              />
            ))}
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
