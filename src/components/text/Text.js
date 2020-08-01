import React, { Component } from "react";
import PropTypes from "prop-types";
import { COLOR, FONT_WEIGHT } from "../../Const";

class Text extends Component {
  render() {
    let fontSize = this.props.size ? this.props.size : 16;
    let color = this.props.color ? this.props.color : COLOR.BLACK;
    let fontWeight = this.props.fontWeight
      ? this.props.fontWeight
      : FONT_WEIGHT.NORMAL;

    return (
      <div style={{ fontSize, color, fontWeight, ...this.props.style }}>
        {this.props.children}
      </div>
    );
  }
}

Text.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.string.isRequired,
};

export default Text;
