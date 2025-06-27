import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getCreateAndEgitArticleData } from "../../selectors/createAndEditArticlePage";
import { Article } from "@/entities/Article";

export const createNewArticle = createAsyncThunk<Article, void, ThunkConfig<string>>(
  "createAndEditArticlePage/createNewArticle",

  async (_, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState());
    const article = getCreateAndEgitArticleData(thunkAPI.getState());

    if (!userData || !article) {
      return thunkAPI.rejectWithValue("no data");
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
      return thunkAPI.rejectWithValue("error");
    }
  },
);
