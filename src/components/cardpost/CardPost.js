import React, { Component } from "react";
import Card from "../../components/card/Card";
import Avatar from "../../components/avatar/Avatar";
import Text from "../../components/text/Text";
import { FONT_WEIGHT, COLOR } from "../../Const";

import { Icon, InlineIcon } from "@iconify/react";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import heartFilled from "@iconify/icons-ant-design/heart-filled";
import commentOutlined from "@iconify/icons-ant-design/comment-outlined";

class CardPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card
        style={{ width: 620, margin: "24px auto 0 auto", overflow: "auto" }}
      >
        <div>
          <Avatar
            style={{
              marginTop: 24,
              marginLeft: 24,
              marginRight: 24,
              marginBottom: 16,
              float: "left",
            }}
          />
          <div style={{ marginTop: 24, float: "left" }}>
            <Text fontWeight={FONT_WEIGHT.BOLD}>Ananda Rifkiy Hasan</Text>
            <Text size={14}>12 Menit yang lalu</Text>
          </div>
        </div>
        <img
          style={{ width: 620, height: 620, objectFit: "cover" }}
          src="https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png"
        />
        <div
          style={{
            padding: "16px 24px",
            overflow: "auto",
            borderBottom: "1px solid #c4c4c4",
          }}
        >
          <div
            style={{
              overflow: "auto",
              float: "left",
              cursor: "pointer",
              marginRight: 16,
            }}
          >
            <Icon
              icon={heartFilled}
              style={{ color: COLOR.RED, fontSize: "32px", float: "left" }}
            />
            <Text
              style={{ float: "left", margin: 6 }}
              fontWeight={FONT_WEIGHT.SEMI_BOLD}
              size={14}
            >
              12 Suka
            </Text>
          </div>
          <div
            style={{ overflow: "auto", float: "left", cursor: "pointer" }}
            onClick={this.props.clickComment}
          >
            <Icon
              icon={commentOutlined}
              style={{ fontSize: "32px", float: "left" }}
            />
            <Text
              style={{ float: "left", margin: 6 }}
              fontWeight={FONT_WEIGHT.SEMI_BOLD}
              size={14}
            >
              12 Komentar
            </Text>
          </div>
        </div>
        <Text
          fontWeight={FONT_WEIGHT.SEMI_BOLD}
          size={14}
          style={{ margin: 24 }}
        >
          Engkau tetap gagah melawan ombak dan perjuangan hidup ini demi
          mencapai pada kebahagiaan keluargamu, dimana diwaktu tertentu dirimu
          tersungkur dan terjatuh, tetapi semangatmu tetap terus berkobar
          sehingga membuatmu kembali berdiri demi hidup istri dan anakmu.
        </Text>
      </Card>
    );
  }
}

export default CardPost;
