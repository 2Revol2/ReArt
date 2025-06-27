import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";

export const fetchArticleData = createAsyncThunk<Article, string, ThunkConfig<string>>(
  "createAndEditArticlePage/fetchArticleData",
  async (articleId, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  },
);
