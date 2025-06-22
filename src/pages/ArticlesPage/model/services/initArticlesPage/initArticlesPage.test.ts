import { initArticlesPage } from "./initArticlesPage";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";

describe("initArticlesPage.test.ts", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(4);
  });

  test("initArticlesPage not called", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
