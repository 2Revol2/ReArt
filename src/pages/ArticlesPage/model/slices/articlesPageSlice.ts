import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { Article, ArticleSortField, ArticleView, ArticleType } from "@/entities/Article";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/constants/localStorage";
import { SortOrder } from "@/shared/types";

const articlesAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    limit: 11,
    hasMore: true,
    _inited: false,
    sort: ArticleSortField.CREATED,
    search: "",
    order: "asc",
    type: ArticleType.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 3 : 11;
      state._inited = true;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },

    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },

    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, actions) => {
        state.hasMore = actions.payload.length >= state.limit;
        state.isLoading = false;

        if (actions.meta.arg.replace) {
          articlesAdapter.setAll(state, actions.payload);
        } else {
          articlesAdapter.addMany(state, actions.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  },
});

export const { actions: articlesPageAction, reducer: articlesPageReducer } = articlesPageSlice;
