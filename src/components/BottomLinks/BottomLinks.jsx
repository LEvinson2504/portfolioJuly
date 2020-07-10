import React from "react";
import {
  InstagramOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./BottomLinks.module.css";
const BottomLinks = () => {
  const iconStyle = { fontSize: "50px", color: "#08c" };
  return (
    <>
      <a href="https://www.instagram.com/levinson_dsouza/">
        <InstagramOutlined style={{ fontSize: "50px", color: "#c13584" }} />
      </a>
      <a href="https://www.instagram.com/levinson_dsouza/">
        <GithubOutlined style={{ fontSize: "50px", color: "black" }} />
      </a>
      <a href="https://www.instagram.com/levinson_dsouza/">
        <TwitterOutlined style={iconStyle} />
      </a>
    </>
  );
};

export default BottomLinks;
