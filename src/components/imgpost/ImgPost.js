import React, { Component } from "react";

import "./ImgPost.css";

class ImgPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { post } = this.props;
    return (
      <img
        onClick={this.props.onClick}
        className="postimg-profile"
        src={post.imgsrc}
      />
    );
  }
}

export default ImgPost;
