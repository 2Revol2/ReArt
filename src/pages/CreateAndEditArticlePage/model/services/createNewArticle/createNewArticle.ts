import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getCreateAndEditArticleData } from "../../selectors/createAndEditArticlePage";
import { Article } from "@/entities/Article";
import { ValidateArticleError } from "../../types/createAndEditArticlePage";
import { validateArticleData } from "../validateArticleData/validateArticleData";

export const createNewArticle = createAsyncThunk<Article, void, ThunkConfig<ValidateArticleError[]>>(
  "createAndEditArticlePage/createNewArticle",

  async (_, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState());
    const article = getCreateAndEditArticleData(thunkAPI.getState());
    const errors = validateArticleData(article);

    if (errors.length) {
      return thunkAPI.rejectWithValue(errors);
    }

    if (!userData || !article) {
      return thunkAPI.rejectWithValue([ValidateArticleError.NO_DATA]);
    }

    try {
      const response = await thunkAPI.extra.api.post<Article>("/articles", {
        userId: userData.id,
        ...article,
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue([ValidateArticleError.INCORRECT_TITLE]);
    }
  },
);
