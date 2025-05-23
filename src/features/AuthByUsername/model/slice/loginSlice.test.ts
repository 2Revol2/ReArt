import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test.ts", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "123" };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername("zxc"))).toEqual({
      username: "zxc",
    });
  });

  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "123" };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword("zxc"))).toEqual({
      password: "zxc",
    });
  });
});
