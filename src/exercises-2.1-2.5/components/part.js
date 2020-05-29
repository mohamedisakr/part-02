import React from "react";

const Part = ({ id, name, exercises }) => (
  <div key={id}>
    <p>
      {name} {exercises}
    </p>
  </div>
);

export default Part;
