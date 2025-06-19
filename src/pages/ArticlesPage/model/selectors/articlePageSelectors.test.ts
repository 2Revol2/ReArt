import { StateSchema } from "@/app/providers/StoreProvider";
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from "./articlePageSelectors";
import { ArticleView } from "@/entities/Article";

describe("articlePageSelectors.test.ts", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { isLoading: true },
    };
    expect(getArticlePageIsLoading(state as StateSchema)).toBe(true);
  });

  test("with empty loading", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageIsLoading(state as StateSchema)).toBe(false);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { error: "error" },
    };
    expect(getArticlePageError(state as StateSchema)).toBe("error");
  });

  test("with empty error", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageError(state as StateSchema)).toBe(undefined);
  });

  test("should return view big", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { view: ArticleView.BIG },
    };
    expect(getArticlePageView(state as StateSchema)).toEqual(ArticleView.BIG);
  });

  test("with empty view", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageView(state as StateSchema)).toEqual(ArticleView.SMALL);
  });
});
