import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassord", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: "123" },
    };
    expect(getLoginPassword(state as StateSchema)).toBe("123");
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toBe("");
  });
});
