import React, { Component } from "react";
import "./Button.css";
class Button extends Component {
  render() {
    let { type } = this.props;
    type = type ? type : "primary";
    return (
      <button
        className={type}
        onClick={this.props.onClick}
        style={{ ...this.props.style }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
