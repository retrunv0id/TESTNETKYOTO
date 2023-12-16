import React from "react";
import "../Info/Info.css";

const Info = () => {
  return (
    <div>
      <div className="containerx">
        <div className="content">
          <span>
            <a href="https://twitter.com/retrunvoid" target="_blank">
              <i className="bi bi-twitter-x"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/retrunv0id" target="_blank">
              <i className="bi bi-github"></i>
            </a>
          </span>
          <span>
            <a href="https://medium.com/@retrunvoid" target="_blank">
              <i className="bi bi-medium"></i>
            </a>
          </span>
          <span>
            <a href="https://www.youtube.com/channel/UCrh_gN8N-It0dAZyeO6MlFQ" target="_blank">
              <i className="bi bi-youtube"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
