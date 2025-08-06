import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import s from "./ArticlesPageFilters.module.scss";
import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from "../../model/selectors/articlePageSelectors";
import { ArticleSortField, ArticleType, ArticleView, ArticleTypeTabs } from "@/entities/Article";
import { articlesPageAction } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/Card/Card";
import { Input } from "@/shared/ui/Input/Input";
import { ArticleSortSelector } from "@/entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { SortOrder } from "@/shared/types";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "@/shared/hooks/useDebounce/useDebounce";
import { HStack } from "@/shared/ui/Stack";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const view = useSelector(getArticlePageView);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const order = useSelector(getArticlePageOrder);
  const sort = useSelector(getArticlePageSort);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlePageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch],
  );

  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageAction.setOrder(order));
      dispatch(articlesPageAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageAction.setSort(sort));
      dispatch(articlesPageAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlesPageAction.setSearch(value));
      dispatch(articlesPageAction.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageAction.setType(value));
      dispatch(articlesPageAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={classNames(s.articlesPageFilters, {}, [className])}>
      <HStack max justify="between" align="center">
        <ArticleSortSelector order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </HStack>
      <Card>
        <Input placeholder={t("Search")} onChange={onChangeSearch} value={search} />
      </Card>
      <ArticleTypeTabs value={type} onChangeType={onChangeType} />
    </div>
  );
});
