import { StateSchema } from "@/app/providers/StoreProvider";

export const getCreateAndEditArticleData = (state: StateSchema) => state.createAndEditArticlePage?.data;
export const getCreateAndEditArticleIsLoading = (state: StateSchema) => state.createAndEditArticlePage?.isLoading;
export const getCreateAndEditArticleError = (state: StateSchema) => state.createAndEditArticlePage?.error;
