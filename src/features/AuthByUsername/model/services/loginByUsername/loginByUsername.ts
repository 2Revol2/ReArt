import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/entities/User";
import { userActions } from "@/entities/User/model/slice/userSlice";
import { USER_LOCALSTORAGE_KEY } from "@/shared/constants/localStorage";
import { ThunkConfig } from "@/app/providers/StoreProvider";

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
  "login/loginByUsername",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>("/login", {
        username,
        password,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  },
);
