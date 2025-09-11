import { Article } from "@/entities/Article";
import { ValidateArticleError } from "../consts/consts";

export type createAndEditArticlePage = Partial<Omit<Article, "user">>;

export interface CreateAndEditArticlePageSchema {
  data: createAndEditArticlePage;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateArticleError[];
}
