import { ArticleBlockType, ArticleType, createAndEditArticle } from "@/entities/Article";
import { createNewArticle } from "./createNewArticle";
import { TestAsyncThunk } from "@/shared/config/tests/TestAsyncThunk/TestAsyncThunk";

export const articleResponse: createAndEditArticle = {
  id: "1",
  title: "Hello World",
  subtitle: "My first article",
  img: "test",
  views: 100,
  createdAt: "test",
  type: [ArticleType.IT],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Introduction",
      paragraphs: ["This is the first paragraph.", "This is the second paragraph."],
    },
  ],
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
