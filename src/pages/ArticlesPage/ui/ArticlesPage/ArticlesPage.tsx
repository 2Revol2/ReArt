import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageAction, articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/hooks/useInitialEffect/useInitialEffect";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
  getArticlePageError,
  getArticlePageInited,
  getArticlePageIsLoading,
  getArticlePageView,
} from "../../model/selectors/articlePageSelectors";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import { ArticleView } from "@/entities/Article";
import { Page } from "@/widgets/Page/Page";
import { fetchArticlesNextPage } from "../../model/services/fetchArticlesNextPage/fetchArticlesNextPage";
import { Text } from "@/shared/ui/Text/Text";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);

  const { t } = useTranslation();

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onLoadNextPage = useCallback(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticlesNextPage());
    }
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch],
  );

  if (error) {
    <Page>
      <Text title={t("errors.Unexpected")} />
    </Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPage}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
