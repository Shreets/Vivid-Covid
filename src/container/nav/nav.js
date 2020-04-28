import React from "react";
import "./nav.css";
import Logo from "../asset/logo.png";
import Chart from "../asset/chart.png";
import hover from "../asset/hover.png";

const Nav = (props) => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="tabs">
        <span className="tab-span">
          <a onClick={props.recoverSelect}>RECOVERY</a>
        </span>
        <span className="img-span">
          <img src={Chart} alt="chart logo" className="chart-logo"></img>
        </span>
      </div>
    </div>
  );
};

export default Nav;
