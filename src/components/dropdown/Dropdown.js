import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  render() {
    return (
      <div className="dropdown" style={{ ...this.props.style }}>
        <span>{this.props.title}</span>
        <div className="dropdown-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Dropdown;
