import { initArticlesPage } from "./initArticlesPage";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";

describe("initArticlesPage.test.ts", () => {
  test("success", async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    await thunk.callThunk(searchParams);
    expect(thunk.dispatch).toBeCalledTimes(4);
  });

  test("initArticlesPage not called", async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    await thunk.callThunk(searchParams);
    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
