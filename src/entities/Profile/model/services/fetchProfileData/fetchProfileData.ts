import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  "login/loginByUsername",
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>("/profile");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  },
);
