import { ArticleBlockType, ArticleType, createAndEditArticle } from "@/entities/Article";
import { ValidateArticleError } from "../../consts/consts";
import { validateArticleData } from "./validateArticleData";

export const data: createAndEditArticle = {
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

describe("validateArticleData.test.ts", () => {
  test("without validate errors", () => {
    const res = validateArticleData(data);
    expect(res).toEqual([]);
  });
  test("no blocks", () => {
    const res = validateArticleData({ ...data, blocks: [] });
    expect(res).toEqual([ValidateArticleError.NO_BLOCK]);
  });
  test("incorect title", () => {
    const res = validateArticleData({ ...data, title: "" });
    expect(res).toEqual([ValidateArticleError.INCORRECT_TITLE]);
  });
  test("incorect subtitle", () => {
    const res = validateArticleData({ ...data, subtitle: "" });
    expect(res).toEqual([ValidateArticleError.INCORRECT_SUBTITLE]);
  });
  test("incorect article type", () => {
    const res = validateArticleData({ ...data, type: undefined });
    expect(res).toEqual([ValidateArticleError.INCORRECT_TYPE]);
  });
  test("no data", () => {
    const res = validateArticleData(undefined);
    expect(res).toEqual([ValidateArticleError.NO_DATA]);
  });
  test("incorect text block", () => {
    const res = validateArticleData({
      ...data,
      blocks: [
        {
          id: "1",
          type: ArticleBlockType.TEXT,
          title: "Introduction",
          paragraphs: [],
        },
      ],
    });
    expect(res).toEqual([ValidateArticleError.INCORRECT_TEXT_BLOCK]);
  });

  test("incorect code block", () => {
    const res = validateArticleData({
      ...data,
      blocks: [
        {
          id: "1",
          type: ArticleBlockType.CODE,
          code: "",
        },
      ],
    });
    expect(res).toEqual([ValidateArticleError.INCORRECT_CODE_BLOCK]);
  });

  test("incorect code block", () => {
    const res = validateArticleData({
      ...data,
      blocks: [
        {
          id: "1",
          type: ArticleBlockType.IMAGE,
          src: "",
          title: "123123",
        },
      ],
    });
    expect(res).toEqual([ValidateArticleError.INCORRECT_IMAGE_BLOCK]);
  });
  test("incorect all", () => {
    const res = validateArticleData({});
    expect(res).toEqual([
      ValidateArticleError.INCORRECT_TITLE,
      ValidateArticleError.INCORRECT_SUBTITLE,
      ValidateArticleError.INCORRECT_TYPE,
      ValidateArticleError.NO_BLOCK,
    ]);
  });
});
