import { DeepPartial } from "@reduxjs/toolkit";
import { CounterActions, CounterReducer } from "./CounterSlice";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { CounterSchema } from "../types/CounterSchema";

describe("CounterSlice", () => {
  test("test decrement", () => {
    const state: CounterSchema = { value: 10 };
    expect(CounterReducer(state, CounterActions.decrement())).toEqual({ value: 9 });
  });

  test("test increment", () => {
    const state: CounterSchema = { value: 10 };
    expect(CounterReducer(state, CounterActions.increment())).toEqual({ value: 11 });
  });

  test("should work with empty state", () => {
    expect(CounterReducer(undefined, CounterActions.increment())).toEqual({ value: 1 });
  });
});
