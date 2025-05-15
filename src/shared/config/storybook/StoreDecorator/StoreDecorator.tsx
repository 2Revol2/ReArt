import { StoryFn } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const StoreDecorator = (state: DeepPartial<StateSchema>) =>
  function (StoryCom: StoryFn) {
    return (
      <StoreProvider initialState={state}>
        <StoryCom />
      </StoreProvider>
    );
  };
