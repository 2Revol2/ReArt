import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

describe("getProfileForm", () => {
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

  test("should return form", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
