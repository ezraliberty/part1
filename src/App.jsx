import { useState } from "react";

const Button = ({ handleClicks, text }) => (
  <button onClick={handleClicks}>{text}</button>
);

const StatisticLine = ({text, value}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}{text === "Positive" && "%"}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>statistics</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="Average" value={total / 3} />
        <StatisticLine text="Positive" value={(good / total) * 100} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    const allGood = good + 1;
    setGood(allGood);
    setTotal(allGood + neutral + bad);
  };

  const handleNeutral = () => {
    const allNeutral = neutral + 1;
    setNeutral(allNeutral);
    setTotal(allNeutral + good + bad);
  };

  const handleBad = () => {
    const allBad = bad + 1;
    setBad(allBad);
    setTotal(allBad + good + neutral);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClicks={handleGood} text="Good" />
      <Button handleClicks={handleNeutral} text="Neutral" />
      <Button handleClicks={handleBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
