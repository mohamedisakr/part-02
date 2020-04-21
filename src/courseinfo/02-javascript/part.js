import React from "react";

const Part = ({ index, name, exercises }) => (
  <>
    <p key={index}>
      {name}, {exercises}
    </p>
  </>
);

export default Part;
