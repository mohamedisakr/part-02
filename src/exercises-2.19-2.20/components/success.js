import React from "react";

const Success = ({ message }) => {
  if (message === null) {
    return null;
  }

  return message ? <div className="success">{message}</div> : null;
};

export default Success;
