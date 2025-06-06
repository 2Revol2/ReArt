import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "123",
      },
    };
    expect(getProfileError(state as StateSchema)).toBe("123");
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});
