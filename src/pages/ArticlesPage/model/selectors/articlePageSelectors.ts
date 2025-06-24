import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "@/entities/Article";

export const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlePageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articlesPage?._inited || false;
export const getArticlePageSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSortField.CREATED;
export const getArticlePageSearch = (state: StateSchema) => state.articlesPage?.search ?? "";
export const getArticlePageOrder = (state: StateSchema) => state.articlesPage?.order || "asc";
export const getArticlePageType = (state: StateSchema) => state.articlesPage?.type || ArticleType.ALL;
