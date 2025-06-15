import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddNewCommentSchema } from "../types/addNewComment";

const initialState: AddNewCommentSchema = {
  text: "",
};

export const addNewCommentSlice = createSlice({
  name: "addNewComment",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, actions) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, actions) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, actions) => {
  //       state.isLoading = false;
  //       state.error = actions.payload;
  //     });
  // },
});

// Action creators are generated for each case reducer function
export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
