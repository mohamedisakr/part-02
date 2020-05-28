import React, { useState } from "react";
// import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.from(Array(props.anecdotes.length), () => 0)
  );
  const [max, setMax] = useState(0);
  const [index, setindex] = useState(0);

  // the anecdote with max votes
  // the voted index

  // if no max
  // else

  const handleVoting = (event) => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);

    setMax(newVotes[selected]);
    setindex(selected);

    console.log(votes[selected]);
    console.log(votes.join(" "));
  };

  const handleClick = (event) => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <div>{props.anecdotes[selected]}</div>
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
      {max > 0 ? (
        <div>
          <h3>Anecdote with most votes</h3>
          <p>{props.anecdotes[index]}</p>
          <p>has {votes[index]} votes</p>
        </div>
      ) : null}
    </div>
  );
};

export default App;
