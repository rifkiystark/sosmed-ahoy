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
      statusModalComment: "hide",
    };
    this.fetchData = this.fetchData.bind(this);
    this.showComment = this.showComment.bind(this);
  }

  fetchData = () => {
    let posts = this.state.posts;
    posts.push([1, 2, 3, 4, 5]);
    setTimeout(() => {
      this.setState({ posts: posts });
    }, 2000);
  };

  showComment = (id) => {
    this.setState({ statusModalComment: "show" });
  };

  render() {
    const { posts, statusModalComment } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <ModalComment status={statusModalComment} />
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
                clickComment={() => this.showComment(index)}
              />
            ))}
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
