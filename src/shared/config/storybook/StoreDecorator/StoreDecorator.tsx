import { StoryFn } from "@storybook/react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";

const defauldAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) =>
  function (StoryCom: StoryFn) {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defauldAsyncReducers, ...asyncReducers }}
      >
        <StoryCom />
      </StoreProvider>
    );
  };
