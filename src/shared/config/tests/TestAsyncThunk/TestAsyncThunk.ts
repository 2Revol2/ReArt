import axios, { AxiosStatic } from "axios";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

type actionCreatorType<Return, Arg, rejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: rejectedValue }>;

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, rejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: actionCreatorType<Return, Arg, rejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(actionCreator: actionCreatorType<Return, Arg, rejectedValue>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
    return result;
  }
}
