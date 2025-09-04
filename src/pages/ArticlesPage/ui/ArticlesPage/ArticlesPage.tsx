import { memo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/hooks/useInitialEffect/useInitialEffect";
import { Page } from "@/widgets/Page/Page";
import { fetchArticlesNextPage } from "../../model/services/fetchArticlesNextPage/fetchArticlesNextPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import s from "./ArticlesPage.module.scss";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
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
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
