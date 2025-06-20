import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { getArticlePageLimit } from "../../selectors/articlePageSelectors";

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  "articlesPage/fetchArticlesList",

  async (props, thunkAPI) => {
    const { page = 1 } = props;
    const limit = getArticlePageLimit(thunkAPI.getState());
    try {
      const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
          _page: page,
          _limit: limit,
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
