import React from "react";
import Statistic from "./statistic";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      {all === 0 ? (
        <div>No feedback given</div>
      ) : (
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={all} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positive} />
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Statistics;

// (
//   <div>No feedback given</div>
// ) : (

// );

// ================================

//  (

//      {all===0 ?(
//
//   ) :(
//     <div>
//       <h3>Statistics</h3>
//       <p>Good {good}</p>
//       <p>Neutral {neutral}</p>
//       <p>Bad {bad}</p>
//       <p>all {all}</p>
//       <p>average {average}</p>
//       <p>positive {positive}</p>
//     </div>
//   )}
//  )
