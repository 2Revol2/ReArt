import { Currency } from "@/entities/Currency";
import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "@/entities/Country";

const data = {
  id: "1",
  first: "Макc",
  lastname: "Револ",
  age: 17,
  currency: Currency.USD,
  country: Country.Ukraine,
  city: "Zaporozhye",
  username: "admin",
  avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
};

describe("fetchProfileData.test.ts", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("failed", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
