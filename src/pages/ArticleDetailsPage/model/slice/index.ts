import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types/ArticleDetailsPageSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
});
