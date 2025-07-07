import { CreateAndEditArticlePageSchema } from "../types/createAndEditArticlePage";
import { updateArticleData } from "../services/updateArticleData/updateArticleData";
import { ArticleBlockType, ArticleType } from "@/entities/Article";
import { createAndEditArticlePageActions, createAndEditArticlePageReducer } from "./createAndEditArticlePageSlice";

describe("createAndEditArticlePageSlice.test", () => {
  test("test set title", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = { data: {} };
    expect(
      createAndEditArticlePageReducer(
        state as CreateAndEditArticlePageSchema,
        createAndEditArticlePageActions.setArticleTitle("title"),
      ),
    ).toEqual({
      data: {
        title: "title",
      },
    });
  });

  test("test set subtitle", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = { data: {} };
    expect(
      createAndEditArticlePageReducer(
        state as CreateAndEditArticlePageSchema,
        createAndEditArticlePageActions.setArticleSubtitle("test"),
      ),
    ).toEqual({
      data: {
        subtitle: "test",
      },
    });
  });

  test("test set image", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = { data: {} };
    expect(
      createAndEditArticlePageReducer(
        state as CreateAndEditArticlePageSchema,
        createAndEditArticlePageActions.setArticleImage("image"),
      ),
    ).toEqual({
      data: {
        img: "image",
      },
    });
  });

  test("test set article type", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = { data: {} };
    expect(
      createAndEditArticlePageReducer(
        state as CreateAndEditArticlePageSchema,
        createAndEditArticlePageActions.setArticleType(ArticleType.ECONOMICS),
      ),
    ).toEqual({
      data: {
        type: [ArticleType.ECONOMICS],
      },
    });
  });

  test("test add article block", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = { data: { blocks: [] } };

    const result = createAndEditArticlePageReducer(
      state as CreateAndEditArticlePageSchema,
      createAndEditArticlePageActions.addArticleBlock(ArticleBlockType.TEXT),
    );

    expect(result.data.blocks).toHaveLength(1);
    expect(result.data.blocks?.[0]).toMatchObject({
      type: ArticleBlockType.TEXT,
      title: "",
      paragraphs: [],
    });
  });

  test("test update article image block", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = {
      data: {
        blocks: [
          {
            id: "1",
            type: ArticleBlockType.IMAGE,
            title: "test",
            src: "",
          },
        ],
      },
    };

    const result = createAndEditArticlePageReducer(
      state as CreateAndEditArticlePageSchema,
      createAndEditArticlePageActions.updateImageBlock({
        id: "1",
        changes: { title: "updated title" },
      }),
    );

    expect(result.data.blocks?.[0]).toEqual({
      id: "1",
      type: ArticleBlockType.IMAGE,
      title: "updated title",
      src: "",
    });
  });

  test("test update article text block", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = {
      data: {
        blocks: [
          {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "test",
            paragraphs: [],
          },
        ],
      },
    };

    const result = createAndEditArticlePageReducer(
      state as CreateAndEditArticlePageSchema,
      createAndEditArticlePageActions.updateTextBlock({
        id: "1",
        changes: { title: "updated title", paragraphs: ["test"] },
      }),
    );

    expect(result.data.blocks?.[0]).toEqual({
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "updated title",
      paragraphs: ["test"],
    });
  });

  test("test update article code block", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = {
      data: {
        blocks: [
          {
            id: "1",
            type: ArticleBlockType.CODE,
            code: "test",
          },
        ],
      },
    };

    const result = createAndEditArticlePageReducer(
      state as CreateAndEditArticlePageSchema,
      createAndEditArticlePageActions.updateCodeBlock({
        id: "1",
        changes: { code: "updated code" },
      }),
    );

    expect(result.data.blocks?.[0]).toEqual({
      id: "1",
      type: ArticleBlockType.CODE,
      code: "updated code",
    });
  });

  test("test remove article block", () => {
    const state: DeepPartial<CreateAndEditArticlePageSchema> = {
      data: {
        blocks: [
          { id: "1", type: ArticleBlockType.TEXT, title: "updated title", paragraphs: ["test"] },
          {
            id: "2",
            type: ArticleBlockType.TEXT,
            title: "test",
            paragraphs: [],
          },
        ],
      },
    };
    expect(
      createAndEditArticlePageReducer(
        state as CreateAndEditArticlePageSchema,
        createAndEditArticlePageActions.removeArticleBlock("1"),
      ),
    ).toEqual({
      data: {
        blocks: [
          {
            id: "2",
            type: ArticleBlockType.TEXT,
            title: "test",
            paragraphs: [],
          },
        ],
      },
    });
  });
});
