import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";
import { course } from "./data";

const App = () => {
  return (
    <>
      <Header course={course.name} />
      <Content contents={course.parts} />
      <Total contents={course.parts} />
    </>
  );
};

export default App;
