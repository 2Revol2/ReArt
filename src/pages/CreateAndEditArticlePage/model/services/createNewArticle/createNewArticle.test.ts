import { createNewArticle } from "./createNewArticle";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";

const articleResponse = {
  id: "1",
  user: { id: "1", username: "user" },
  title: "hello",
};
const user = { id: "1", username: "user" };

describe("createNewArticle.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(createNewArticle, {
      createAndEditArticlePage: { data: articleResponse },
      user: { authData: user },
    });

    thunk.api.post.mockReturnValue(Promise.resolve({ data: articleResponse }));

    const result = await thunk.callThunk();

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(articleResponse);
  });

  test("failed", async () => {
    const thunk = new TestAsyncThunk(createNewArticle);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
