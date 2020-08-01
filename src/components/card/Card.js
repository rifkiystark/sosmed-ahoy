import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  render() {
    let className = "card";
    className += this.props.className ? ` ${this.props.className}` : "";

    return (
      <div className={className} style={{ ...this.props.style }}>
        {this.props.children}
      </div>
    );
  }
}
export default Card;
