import React, { Component } from "react";
import "./Button.css";

import { Ring as Loading } from "react-spinners-css";

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
        {this.props.loading ? (
          <Loading size={32} color="#fff" />
        ) : (
          this.props.children
        )}
      </button>
    );
  }
}

export default Button;
