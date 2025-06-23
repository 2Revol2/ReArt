import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollRecoverySchema } from "../types/ScrollRecoverySchema";

const initialState: ScrollRecoverySchema = {
  scroll: {},
};

export const scrollRecoverySlice = createSlice({
  name: "ScrollRecovery",
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: scrollRecoveryActions } = scrollRecoverySlice;
export const { reducer: scrollRecoveryReducer } = scrollRecoverySlice;
