import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";
import { course, contents } from "./data";

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total contents={contents} />
    </div>
  );
};

export default App;
