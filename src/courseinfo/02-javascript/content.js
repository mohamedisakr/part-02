import React from "react";
import Part from "./part";

const Content = ({ contents }) => (
  <>
    {contents.map((item, index) => (
      <Part key={index} name={item.name} exercises={item.exercises} />
    ))}
  </>
);

export default Content;
