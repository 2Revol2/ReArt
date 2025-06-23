import { StateSchema } from "@/app/providers/StoreProvider";
import { getAddNewCommentError, getAddNewCommentText } from "./getAddNewComment";

describe("getAddNewComment", () => {
  test("should return text", () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: { text: "123" },
    };
    expect(getAddNewCommentText(state as StateSchema)).toBe("123");
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddNewCommentText(state as StateSchema)).toBe("");
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: { error: "error" },
    };
    expect(getAddNewCommentError(state as StateSchema)).toBe("error");
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddNewCommentError(state as StateSchema)).toBe(undefined);
  });
});
