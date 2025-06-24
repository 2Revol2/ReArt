import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article, ArticleType } from "@/entities/Article";
import {
  getArticlePageLimit,
  getArticlePageNumber,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from "../../selectors/articlePageSelectors";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";

interface fetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
  "articlesPage/fetchArticlesList",

  async (_, thunkAPI) => {
    const { getState } = thunkAPI;
    const limit = getArticlePageLimit(getState());
    const page = getArticlePageNumber(getState());
    const sort = getArticlePageSort(getState());
    const search = getArticlePageSearch(getState());
    const order = getArticlePageOrder(getState());
    const type = getArticlePageType(getState());

    try {
      addQueryParams({ sort, order, search, type });
      const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
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
