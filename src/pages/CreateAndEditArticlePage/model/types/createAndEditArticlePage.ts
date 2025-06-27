import { Article } from "@/entities/Article";

export type createAndEditArticlePage = Partial<Omit<Article, "user">>;

export interface CreateAndEditArticlePageSchema {
  data: createAndEditArticlePage;
  isLoading: boolean;
  error?: string;
}
