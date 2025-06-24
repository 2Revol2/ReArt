import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/hooks/useInitialEffect/useInitialEffect";
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from "../../model/selectors/articlePageSelectors";
import { Page } from "@/widgets/Page/Page";
import { fetchArticlesNextPage } from "../../model/services/fetchArticlesNextPage/fetchArticlesNextPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import s from "./ArticlesPage.module.scss";

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPage = useCallback(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticlesNextPage());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPage}>
        <ArticlesPageFilters className={s.filters} />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
