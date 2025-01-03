import React from "react";
import "./socialmedia.css"

const Socialmedia = () => {
  return (
    <div className="connect">
      <div class="connection">
        <h1>contact me or connect with me on</h1>
        <div class="icons">
          <a href="" className="linkedin">
            <img src="https://ssl.gstatic.com/atari/images/sociallinks/linkedin_white_44dp.png" alt="linkedin" />
          </a>

          <a href="">
            <img src="github.png" alt="github" />
          </a>

          <a href="mailto:deevikareddy94@gmail.com" target="_blank">
            <img src="	https://ssl.gstatic.com/atari/images/sociallinks/email_white_44dp.png" alt="gmail" />
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default Socialmedia;
