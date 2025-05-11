import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button/Button";
import { CounterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const increment = () => {
    dispatch(CounterActions.increment());
  };

  const decrement = () => {
    dispatch(CounterActions.decrement());
  };
  return (
    <div>
      <h2 data-testid="value-title">value: {value}</h2>

      <Button data-testid="increment-btn" onClick={increment}>
        increment
      </Button>

      <Button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
