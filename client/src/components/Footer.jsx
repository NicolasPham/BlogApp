import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiTwotoneMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex-row footer">
      <div className="info">
        <h1 className="title">Nicolas Pham</h1>
        <p>Blog App</p>
      </div>
      <div className="flex-row social">
        <AiFillFacebook />
        <AiFillGithub />
        <AiFillLinkedin />
        <AiTwotoneMail />
      </div>
    </div>
  );
};

export default Footer;
