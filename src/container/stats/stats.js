import React from "react";
import "./stats.css";
import CountUp from "react-countup";
import AnimatedNumber from "animated-number-react";

const Stats = (props) => {
  return (
    <div className="stat-wrapper">
      <div className="infected">
        <div className="title"> Confirmed : </div>
        <div className="numbers">
          <CountUp start={0} end={props.confirm} duration={1.5} separator="," />
        </div>
        <div className="date">Recent updated: {props.date}</div>
      </div>
      <div className="recovered">
        <div className="title"> Recovered : </div>
        <div className="numbers">
          <CountUp start={0} end={props.recover} duration={1.5} separator="," />
        </div>
        <div className="date">Recent updated: {props.date}</div>
      </div>
    </div>
  );
};

export default Stats;
