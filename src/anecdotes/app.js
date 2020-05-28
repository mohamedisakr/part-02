import React, { useState } from "react";
// import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const handleClick = (event) => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
    // selected === props.anecdotes.length - 1
    //   ? setSelected(0)
    //   : setSelected(selected + 1);
  };
  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <div>
        <button type="button" onClick={handleClick}>
          Next Anecdote
        </button>
      </div>
      <div>{selected}</div>
    </div>
  );
};

export default App;
