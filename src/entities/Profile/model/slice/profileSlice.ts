import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  form: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },

    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },

    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, actions: PayloadAction<Profile>) => {
        state.data = actions.payload;
        state.form = actions.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, actions: PayloadAction<Profile>) => {
        state.data = actions.payload;
        state.form = actions.payload;
        state.isLoading = false;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
