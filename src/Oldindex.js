import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const Counter = ({ number }) => {
  return <h1>{number}</h1>;
};

const App = (props) => {
  const [contador, setContador] = useState(0);
  const handleClick = () => {
    setContador(contador + 1);
  };
  const handleClickReset = () => {
    setContador(0);
  };
  const handleClickMinus = () => {
    setContador(contador - 1);
  };

  const isEven = contador % 2 === 0;
  const Message = isEven ? "Es par" : "Es impar";
  return (
    <div>
      <p>El valor del contador es: </p>
      <Counter number={contador} />
      <p>{Message}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickMinus}>Disminuir</button>
      <button onClick={handleClickReset}>Resetear</button>
    </div>
  );
};
ReactDOM.render(<App />, rootElement);
