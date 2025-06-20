import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticlePageError,
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageLimit,
  getArticlePageNumber,
  getArticlePageView,
} from "./articlePageSelectors";
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

  test("should return page number", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { page: 2 },
    };
    expect(getArticlePageNumber(state as StateSchema)).toBe(2);
  });

  test("with empty page number", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageNumber(state as StateSchema)).toBe(1);
  });

  test("should return page limit", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { limit: 3 },
    };
    expect(getArticlePageLimit(state as StateSchema)).toBe(3);
  });

  test("with empty page limit", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageLimit(state as StateSchema)).toBe(9);
  });

  test("should return has more", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { hasMore: false },
    };
    expect(getArticlePageHasMore(state as StateSchema)).toBe(false);
  });

  test("with empty has more", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageHasMore(state as StateSchema)).toBe(undefined);
  });
});
