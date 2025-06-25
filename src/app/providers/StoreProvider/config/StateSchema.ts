import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUsername";
import { ProfileSchema } from "@/entities/Profile";
import { ArticleDetailsSchema } from "@/entities/Article";
import {
  ArticleDetailsCommentsSchema,
  ArticleDetailsRecommendationsSchema,
  ArticleDetailsPageSchema,
} from "@/pages/ArticleDetailsPage";
import { AddNewCommentSchema } from "@/features/AddNewComment";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";
import { ScrollRecoverySchema } from "@/features/ScrollRecovery";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollRecovery: ScrollRecoverySchema;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addNewComment?: AddNewCommentSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
