import { Currency } from "@/entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "@/entities/Country";
import { ValidateProfileError } from "../../types/EditableProfileCardSchema";

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

describe("updateProfileData.test.ts", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, first: "" },
      },
    });
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
