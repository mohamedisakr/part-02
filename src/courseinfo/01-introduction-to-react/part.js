import React from "react";

const Part = ({ key, name, exercises }) => (
  <div>
    <p key={key}>
      {name}, {exercises}
    </p>
  </div>
);

export default Part;
