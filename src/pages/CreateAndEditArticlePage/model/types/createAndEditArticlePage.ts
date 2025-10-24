import { ValidateArticleError } from "../consts/consts";
import { createAndEditArticle } from "@/entities/Article";

export interface CreateAndEditArticlePageSchema {
  data: createAndEditArticle;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateArticleError[];
}
