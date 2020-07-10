import React from "react";
import "./NavBar.module.css";
export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <a href="#" className="red">
          Home
        </a>
        <a href="#" className="blue">
          Projects
        </a>
        <a href="#" className="green">
          Contact Me
        </a>
      </div>
    </>
  );
}
