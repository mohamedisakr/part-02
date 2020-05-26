import React, { useState } from "react";
import Feedback from "./feedback";
import Statistics from "./statistics";
// import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setFeedback] = useState(0);

  const handleBad = (event) => {
    setBad(bad + 1);
    setFeedback(totalFeedback + 1);
  };

  const handleGood = (event) => {
    setGood(good + 1);
    setFeedback(totalFeedback + 1);
  };

  const handleNeutral = (event) => {
    setNeutral(neutral + 1);
    setFeedback(totalFeedback + 1);
  };

  return (
    <>
      <Feedback
        incBad={handleBad}
        incGood={handleGood}
        incNeutral={handleNeutral}
      />
      <h3>Statistics (Feedback details)</h3>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={totalFeedback}
        average={totalFeedback === 0 ? 0 : (bad * -1 + good) / totalFeedback}
        positive={good ? `${(good / totalFeedback) * 100} %` : 0}
      />
    </>
  );
};

export default App;
