import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = () => {
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    message: "Buenas usuario!"
  });
  const [clicks, setClicks] = useState([]);

  const counterHandleLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1
    };
    setCounters(newCountersState);
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };
  const counterHandleRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1
    });
    setClicks((prevClicks) => [...prevClicks, "R"]);
  };
  return (
    <div>
      {counters.left}
      <button onClick={counterHandleLeft}>left</button>
      <button onClick={counterHandleRight}>right</button>
      {counters.right}
      <p>{counters.message}</p>
      <p>Haz clickeado {clicks.length} veces!</p>
      {clicks}
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
