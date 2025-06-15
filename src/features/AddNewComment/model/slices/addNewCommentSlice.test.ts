import { AddNewCommentSchema } from "../types/addNewComment";
import { addNewCommentActions, addNewCommentReducer } from "./addNewCommentSlice";

describe("loginSlice.test.ts", () => {
  test("test set username", () => {
    const state: DeepPartial<AddNewCommentSchema> = { text: "123" };
    expect(addNewCommentReducer(state as AddNewCommentSchema, addNewCommentActions.setText("zxc"))).toEqual({
      text: "zxc",
    });
  });
});
