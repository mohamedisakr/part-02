import React, { useState } from "react";
// import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.from(Array(props.anecdotes.length), () => 0)
  );

  //   const voting = Array.from(Array(props.anecdotes.length), () => 0);
  //   let newVoting = [];

  const handleVoting = (event) => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);

    console.log(votes[selected]);
    console.log(votes.join(" "));
  };

  const handleClick = (event) => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  return (
    <div>
      <div>{props.anecdotes[selected]}</div>{" "}
      <div>
        <p>has {votes[selected]} votes</p>
      </div>
      <div>
        <button type="button" onClick={handleVoting}>
          Vote
        </button>
        <button type="button" onClick={handleClick}>
          Next Anecdote
        </button>
      </div>
      <div>The selected index {selected}</div>
      <div>The votes Array {votes.join(" ")}</div>
    </div>
  );
};

export default App;
