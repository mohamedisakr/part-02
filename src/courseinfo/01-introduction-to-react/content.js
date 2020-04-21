import React from "react";
import Part from "./part";

const Content = ({ contents }) => (
  <div>
    {contents.map((item, index) => (
      <Part key={index} name={item.name} exercises={item.exercises} />
    ))}
  </div>
);

export default Content;
