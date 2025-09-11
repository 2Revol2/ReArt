import { Currency } from "@/entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { Country } from "@/entities/Country";
import { ValidateProfileError } from "../../consts/consts";

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

describe("validateProfileData.test.ts", () => {
  test("without validate error", () => {
    const res = validateProfileData(data);
    expect(res).toEqual([]);
  });
  test("incorect first and lastname", () => {
    const res = validateProfileData({ ...data, first: "", lastname: "" });
    expect(res).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorect age", () => {
    const res = validateProfileData({ ...data, age: 0 });
    expect(res).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorect city", () => {
    const res = validateProfileData({ ...data, city: "" });
    expect(res).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test("incorect country", () => {
    const res = validateProfileData({ ...data, country: undefined });
    expect(res).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test("no data", () => {
    const res = validateProfileData(undefined);
    expect(res).toEqual([ValidateProfileError.NO_DATA]);
  });
});
