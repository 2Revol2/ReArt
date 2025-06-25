import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  "articleDetailsPage/fetchArticleRecommendations",

  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
        params: {
          _limit: 6,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  },
);
