import React, { Component } from "react";
class Avatar extends Component {
  state = {};
  render() {
    let { url, size, style } = this.props;
    url = url
      ? url
      : "https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png";
    size = size ? size : 48;
    return (
      <img
        className={this.props.className}
        src={url}
        style={{ height: size, width: size, borderRadius: "50%", ...style }}
      />
    );
  }
}

export default Avatar;
