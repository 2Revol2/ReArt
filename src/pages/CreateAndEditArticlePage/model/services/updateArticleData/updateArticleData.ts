import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { getCreateAndEditArticleData } from "../../selectors/createAndEditArticlePage";
import { ValidateArticleError } from "../../types/createAndEditArticlePage";
import { validateArticleData } from "../validateArticleData/validateArticleData";

export const updateArticleData = createAsyncThunk<Article, void, ThunkConfig<ValidateArticleError[]>>(
  "createAndEditArticlePage/updateArticleData",
  async (_, thunkAPI) => {
    const articleData = getCreateAndEditArticleData(thunkAPI.getState());
    const errors = validateArticleData(articleData);

    if (errors.length) {
      return thunkAPI.rejectWithValue(errors);
    }
    try {
      const response = await thunkAPI.extra.api.put<Article>(`/articles/${articleData?.id}`, articleData);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue([ValidateArticleError.SERVER_ERROR]);
    }
  },
);
