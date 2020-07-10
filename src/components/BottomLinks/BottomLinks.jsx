import React from "react";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./BottomLinks.module.css";
const BottomLinks = () => {
  const iconStyle = { fontSize: "50px", color: "#2867b2" };
  return (
    <>
      <a href="https://www.instagram.com/levinson_dsouza/">
        <InstagramOutlined style={{ fontSize: "50px", color: "#c13584" }} />
      </a>
      <a href="https://github.com/LEvinson2504">
        <GithubOutlined style={{ fontSize: "50px", color: "black" }} />
      </a>
      <a href="https://www.linkedin.com/in/levinson-d-souza-093b61129/">
        <LinkedinOutlined style={iconStyle} />
      </a>
    </>
  );
};

export default BottomLinks;
