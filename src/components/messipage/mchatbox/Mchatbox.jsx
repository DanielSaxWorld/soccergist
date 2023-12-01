import React from "react";
import "./Mchatbox.css";

const Mchatbox = () => {
  return (
    <div className="full-chatbox">
      <div className="comment-box">
        <div className="chat">
          <img src="iconmessage.png" />
          <p className="">Comment (16)</p>
        </div>
        <button className="chat-btn1">Sign up/Login to post</button>
      </div>
      <div className="chat-box">
        <textarea
          name="write your comment"
          className="your-message"
          placeholder="write your comment"
        />
      </div>
      <div className="chat-box2">
        <div className="chat-icon-house">
          <img src="./iconaddimage.png" alt="" />
          <img src="./iconcloud.png" alt="" />
          <img src="./link.png" alt="" />
          <img src="./iconhappy.png" alt="" />
          <img src="./bold.png" alt="" />
          <img src="./italic.png" />
          <img src="./iconunderline.png" alt="" />
        </div>
        <div>
          <button className="chat-btn2">
            Send <img src="./iconsend.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mchatbox;
