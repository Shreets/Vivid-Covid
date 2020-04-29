import React, { useState } from "react";
import "./footer.css";

const Footer = (props) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const dialog = (
    <div className="dialogBackdrop">
      <div className="dialogContainer">
        <div>
          {" "}
          At times like this when all you see and hear of is how the COVID-19
          virus is spreading faster than wild fire, I felt like I would rather
          prefer turning up to a source which would only give me the Good News ,
          i.e of patient recoveries.
          <br />
          <span>
            **This is a Test version. Further updates will be made soon.
          </span>{" "}
        </div>
        <div>
          <button
            onClick={() => {
              setDialogVisible(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="foot-wrapper">
      <div className="created">
        Copyright © 2020{" "}
        <a href="https://github.com/Shreets?tab=repositories" target="_blank">
          {" "}
          Shreeti Upreti{" "}
        </a>
      </div>
      <div className="info">
        <a onClick={() => setDialogVisible(true)}>ABOUT</a>
      </div>
      {dialogVisible && dialog}
    </div>
  );
};

export default Footer;
