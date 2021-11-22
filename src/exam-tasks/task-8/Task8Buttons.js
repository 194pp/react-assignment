import {useContext} from "react";
import {CounterContext} from "./Task8";

const Task8Buttons = () => {
  const {counter, setCounter} = useContext(CounterContext);

  const addHandler = (val) => {
    setCounter(counter => counter + val);
  }

  return (
    <>
      <button disabled={counter >= 100} onClick={() => addHandler(10)}>+10</button>
      <button onClick={() => addHandler(-10)}>-10</button>
    </>
  )
}

export default Task8Buttons;