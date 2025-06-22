import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticlePageInited } from "../../selectors/articlePageSelectors";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesPageAction } from "../../slices/articlesPageSlice";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  "articlesPage/initArticlesPage",

  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticlePageInited(getState());

    if (!inited) {
      dispatch(articlesPageAction.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  },
);
