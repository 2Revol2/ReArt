import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.isLoading || false;

export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
