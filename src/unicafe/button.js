import React from "react";
// import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => (
  <span>
    <button onClick={handleClick}>{text}</button>
  </span>
);

export default Button;
