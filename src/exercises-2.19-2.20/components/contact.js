import React from "react";

const Contact = ({ id, name, number, handleClick }) => (
  <div>
    {name} {number} <button onClick={() => handleClick(id)}>Delete</button>
  </div>
);

export default Contact;
