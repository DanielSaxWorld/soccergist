import React from "react";
import "./Mfullcomment.css";

const Mfullcomment = () => {
  return (
    <div className="full-comment">
      <div className="full-comment-top">
        <p>
          Sort by Latest <img className="sort-btn" src="iconarrowdown.png" />
        </p>
      </div>
      <img src="./linecomment.png" />
      <div className="profile-comment">
        <img src="emma.svg" />
        <p className="profile-name-1">Rocksalt</p>
        <p className="profile-comment-1">
          It is understood Kane believes - out of respect for Tottenham and also
          the new manager Ange Postecoglou - it would be unfair for him to leave
          once the season has started.
        </p>
        <div className="profile-reactions-1">
          <img src="./iconlike.svg" alt="" />
          <img src="./icondislike.svg" alt="" />
          <img src="./iconflag.svg" alt="" />
          <p>Share</p>
          <p>Reply</p>
        </div>
        <div className="profile-viku">
          <img className="viku-img" src="./vikuu.png" />
          <p className="profile-name-2">Viktorius</p>
          <p className="profile-comment-2">
            of respect for Tottenham and also the new manager Ange Postecoglou{" "}
          </p>
          <div className="profile-reactions-2">
            <img src="./iconlike.svg" alt="" />
            <img src="./icondislike.svg" alt="" />
            <img src="./iconflag.svg" alt="" />
            <p>Share</p>
            <p>Reply</p>
          </div>
        </div>
        <img className="comment-line" src="./linecomment.png" />
      </div>
      <div className="profile-nino">
        <img className="nino-img" src="./nino.svg" />
        <p className="profile-name-3">Nino</p>
        <p className="profile-comment-3">
          of respect for Tottenham and also the new manager Ange Postecoglou{" "}
        </p>
        <div className="profile-reactions-3">
          <img src="./iconlike.svg" alt="" />
          <img src="./icondislike.svg" alt="" />
          <img src="./iconflag.svg" alt="" />
          <p>Share</p>
          <p>Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Mfullcomment;
