import { fetchArticlesNextPage } from "./fetchArticlesNextPage";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchArticlesNextPage.test.ts", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: true,
        page: 1,
        limit: 5,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 2 });
  });

  test("fetchArticlesList not called", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: false,
        page: 1,
        limit: 5,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test("fetchArticlesList not called", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: true,
        hasMore: true,
        page: 1,
        limit: 5,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
