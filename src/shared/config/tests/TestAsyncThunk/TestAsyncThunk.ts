import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

type actionCreatorType<Return, Arg, rejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: rejectedValue }>;

export class TestAsyncThunk<Return, Arg, rejectedValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  actionCreator: actionCreatorType<Return, Arg, rejectedValue>;

  constructor(actionCreator: actionCreatorType<Return, Arg, rejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);
    return result;
  }
}
