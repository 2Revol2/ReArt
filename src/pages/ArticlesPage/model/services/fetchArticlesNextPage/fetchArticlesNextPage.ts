import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";

import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNumber,
} from "../../selectors/articlePageSelectors";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesPageAction } from "../../slices/articlesPageSlice";

export const fetchArticlesNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  "articlesPage/fetchArticlesNextPage",

  async (_, thunkAPI) => {
    const hasMore = getArticlePageHasMore(thunkAPI.getState());
    const isLoading = getArticlePageIsLoading(thunkAPI.getState());
    const page = getArticlePageNumber(thunkAPI.getState());

    if (hasMore && !isLoading) {
      thunkAPI.dispatch(articlesPageAction.setPage(page + 1));
      thunkAPI.dispatch(fetchArticlesList({}));
    }
  },
);
