import { addCommentForArticle } from "./addCommentForArticle";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";

const commentResponse = {
  id: "1",
  user: { id: "1", username: "user" },
  text: "hello",
};
const user = { id: "1", username: "user" };
const article = { id: "1", title: "title" };

describe("addCommentForArticle.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      articleDetails: { data: article },
      user: { authData: user },
    });

    thunk.api.post.mockReturnValue(Promise.resolve({ data: commentResponse }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(commentResponse);
  });

  test("failed", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
