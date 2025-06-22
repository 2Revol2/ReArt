import { ArticleView } from "@/entities/Article";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { articlesPageAction, articlesPageReducer } from "./articlesPageSlice";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/constants/localStorage";

describe("articlesPageSlice.testts", () => {
  test("test set view", () => {
    const state: DeepPartial<ArticlesPageSchema> = { view: ArticleView.SMALL };
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageAction.setView(ArticleView.BIG))).toEqual({
      view: ArticleView.BIG,
    });
  });

  test("test set initView", () => {
    localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, ArticleView.BIG);
    const state: DeepPartial<ArticlesPageSchema> = {};
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageAction.initState())).toEqual({
      view: ArticleView.BIG,
      limit: 3,
      _inited: true,
    });
  });

  test("test set page", () => {
    localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, ArticleView.BIG);
    const state: DeepPartial<ArticlesPageSchema> = { page: 2 };
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageAction.setPage(3))).toEqual({
      page: 3,
    });
  });
});
