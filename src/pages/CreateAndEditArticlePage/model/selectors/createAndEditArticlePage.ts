import { StateSchema } from "@/app/providers/StoreProvider";

export const getCreateAndEgitArticleData = (state: StateSchema) => state.createAndEditArticlePage?.data;
export const getCreateAndEgitArticleIsLoading = (state: StateSchema) => state.createAndEditArticlePage?.isLoading;
export const getCreateAndEgitArticleError = (state: StateSchema) => state.createAndEditArticlePage?.error;
