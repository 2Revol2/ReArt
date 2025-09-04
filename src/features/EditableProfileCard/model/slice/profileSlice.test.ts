import { Currency } from "@/entities/Currency";

import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "@/entities/Country";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema, ValidateProfileError } from "../types/EditableProfileCardSchema";

const data = {
  first: "Макc",
  lastname: "Револ",
  age: 17,
  currency: Currency.USD,
  country: Country.Ukraine,
  city: "Zaporozhye",
  username: "admin",
  avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
};

describe("profileSlice.test.ts", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "" } };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: "123" }))).toEqual({
      form: { username: "123" },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toEqual({
      data,
      form: data,
      validateErrors: undefined,
      isLoading: false,
      readonly: true,
    });
  });
});
