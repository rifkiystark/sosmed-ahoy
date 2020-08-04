import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    let { placeholder, type, name, value } = this.props;
    placeholder = placeholder ? placeholder : "";
    type = type ? type : "text";
    return (
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        style={this.props.style}
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
      />
    );
  }
}

export default Input;
