import React, { Component } from "react";

import "./ImgPost.css";

class ImgPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <img
        onClick={this.props.onClick}
        className="postimg-profile"
        src="https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png"
      />
    );
  }
}

export default ImgPost;
