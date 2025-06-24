import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticlePageInited } from "../../selectors/articlePageSelectors";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesPageAction } from "../../slices/articlesPageSlice";
import { ArticleSortField, ArticleType } from "@/entities/Article";
import { SortOrder } from "@/shared/types";

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  "articlesPage/initArticlesPage",

  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticlePageInited(getState());

    if (!inited) {
      const orderFromURL = searchParams.get("order") as SortOrder;
      const sortFromURL = searchParams.get("sort") as ArticleSortField;
      const typeFromURL = searchParams.get("type") as ArticleType;
      const searchFromURL = searchParams.get("search");

      if (orderFromURL) {
        dispatch(articlesPageAction.setOrder(orderFromURL));
      }

      if (sortFromURL) {
        dispatch(articlesPageAction.setSort(sortFromURL));
      }

      if (searchFromURL) {
        dispatch(articlesPageAction.setSearch(searchFromURL));
      }

      if (typeFromURL) {
        dispatch(articlesPageAction.setType(typeFromURL));
      }

      dispatch(articlesPageAction.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
