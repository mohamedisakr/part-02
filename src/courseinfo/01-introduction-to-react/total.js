import React from "react";

const Total = ({ contents }) => {
  const reducer = (acc, cur) => acc + cur;
  return (
    <div>
      <p>
        Number of exercises{" "}
        {contents.map((item) => item.exercises).reduce(reducer)}
      </p>
    </div>
  );
};

export default Total;
