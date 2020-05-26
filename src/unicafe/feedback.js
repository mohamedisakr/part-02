import React from "react";
import Button from "./button";
// import ReactDOM from "react-dom";

const Feedback = ({ incGood, incNeutral, incBad }) => {
  return (
    <div>
      <h3>Please give your feedback</h3>
      <Button text="Good" handleClick={incGood} />
      <Button text="Neutral" handleClick={incNeutral} />
      <Button text="Bad" handleClick={incBad} />
    </div>
  );
};

export default Feedback;
