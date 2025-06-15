import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";

const data = [
  {
    id: "1",
    user: { id: "1", username: "user" },
    text: "hello",
  },
  {
    id: "2",
    user: { id: "2", username: "admin" },
    text: "world",
  },
  {
    id: "3",
    user: { id: "2", username: "admin" },
    text: "!",
  },
];

describe("fetchCommentsByArticleId.test.ts", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("failed", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
