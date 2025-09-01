import { Article } from "@/entities/Article";

export type createAndEditArticlePage = Partial<Omit<Article, "user">>;

export enum ValidateArticleError {
  SERVER_ERROR = "SERVER_ERROR",
  NO_DATA = "NO_DATA",
  INCORRECT_TITLE = "INCORRECT_TITLE",
  INCORRECT_SUBTITLE = "INCORRECT_SUBTITLE",
  INCORRECT_TYPE = "INCORRECT_TYPE",
  NO_BLOCK = "NO_BLOCK",
  INCORRECT_TEXT_BLOCK = "INCORRECT_TEXT_BLOCK",
  INCORRECT_CODE_BLOCK = "INCORRECT_CODE_BLOCK",
  INCORRECT_IMAGE_BLOCK = "INCORRECT_IMAGE_BLOCK",
}

export interface CreateAndEditArticlePageSchema {
  data: createAndEditArticlePage;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateArticleError[];
}
