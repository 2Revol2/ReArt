import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  "articleDetailsComments/fetchCommentsByArticleId",
  async (articleId, thunkAPI) => {
    if (!articleId) {
      return thunkAPI.rejectWithValue("error");
    }

    try {
      const response = await thunkAPI.extra.api.get<Comment[]>("/comments", {
        params: {
          articleId,
          _expand: "user",
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
