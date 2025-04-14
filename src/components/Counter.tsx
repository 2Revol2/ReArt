import { useState } from "react";
import s from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1> {counter}</h1>
      <button className={s.button} onClick={() => setCounter(counter + 1)}>
        increment
      </button>
      <button className={s.button} onClick={() => setCounter(counter - 1)}>
        decrement
      </button>
    </div>
  );
};
