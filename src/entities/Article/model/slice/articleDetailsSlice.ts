import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../service/fetchArticleById/fetchArticleById";
import { Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, actions: PayloadAction<Article>) => {
        state.data = actions.payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleById.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
export const { actions: articleDetailsActions } = articleDetailsSlice;
