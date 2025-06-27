import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { getCreateAndEgitArticleData } from "../../selectors/createAndEditArticlePage";

export const updateArticleData = createAsyncThunk<Article, void, ThunkConfig<string>>(
  "profile/updateProfileData",
  async (_, thunkAPI) => {
    const articleData = getCreateAndEgitArticleData(thunkAPI.getState());

    try {
      const response = await thunkAPI.extra.api.put<Article>(`/articles/${articleData?.id}`, articleData);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  },
);
