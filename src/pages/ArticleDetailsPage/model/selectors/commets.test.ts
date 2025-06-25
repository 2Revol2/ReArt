import { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from "./commets";

describe("comments", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: { comments: { error: "error" } },
    };
    expect(getArticleDetailsCommentsError(state as StateSchema)).toBe("error");
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsCommentsError(state as StateSchema)).toBe(undefined);
  });

  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: { comments: { isLoading: true } },
    };
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(true);
  });

  test("with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(false);
  });
});
