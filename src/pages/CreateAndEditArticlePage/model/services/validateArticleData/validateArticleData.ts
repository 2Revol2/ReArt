import { ArticleBlockType } from "@/entities/Article";
import { createAndEditArticlePage, ValidateArticleError } from "../../types/createAndEditArticlePage";

export const validateArticleData = (article?: createAndEditArticlePage) => {
  if (!article) {
    return [ValidateArticleError.NO_DATA];
  }

  const { title, subtitle, type, blocks } = article;
  const errors: ValidateArticleError[] = [];

  if (!title) {
    errors.push(ValidateArticleError.INCORRECT_TITLE);
  }

  if (!subtitle) {
    errors.push(ValidateArticleError.INCORRECT_SUBTITLE);
  }

  if (!type?.length || !type) {
    errors.push(ValidateArticleError.INCORRECT_TYPE);
  }

  if (!blocks || !blocks.length) {
    errors.push(ValidateArticleError.NO_BLOCK);
  } else {
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];

      switch (block.type) {
        case ArticleBlockType.TEXT:
          if (!block.paragraphs || !block.paragraphs.length || block.paragraphs.some((p) => !p.trim())) {
            errors.push(ValidateArticleError.INCORRECT_TEXT_BLOCK);
          }
          break;
        case ArticleBlockType.CODE:
          if (!block.code?.trim()) {
            errors.push(ValidateArticleError.INCORRECT_CODE_BLOCK);
          }
          break;
        case ArticleBlockType.IMAGE:
          if (!block.src?.trim() || !block.title?.trim()) {
            errors.push(ValidateArticleError.INCORRECT_IMAGE_BLOCK);
          }
          break;
        default:
          break;
      }
    }
  }

  return errors;
};
