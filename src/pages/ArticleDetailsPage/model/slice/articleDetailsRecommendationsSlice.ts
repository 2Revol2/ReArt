import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { ArticleDetailsRecommendationsSchema } from "../types/ArticleDetailsRecommendationsSchema";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
  name: "articleDetailsRecommendationsSlice",
  initialState: recommendationAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, actions: PayloadAction<Article[]>) => {
        recommendationAdapter.setAll(state, actions.payload);
        state.isLoading = false;
      })
      .addCase(fetchArticleRecommendations.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
