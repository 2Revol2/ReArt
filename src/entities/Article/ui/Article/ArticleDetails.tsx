import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import s from "./ArticleDetails.module.scss";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/service/fetchArticleById/fetchArticleById";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const data = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  const error = useSelector(getArticleDetailsError);
  const { t } = useTranslation("article");
  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={s.avatar} borderRadius="50%" height={200} width={200} />
        <Skeleton className={s.title} height={32} width={600} />
        <Skeleton className={s.skeleton} height={24} width={400} />
        <Skeleton className={s.skeleton} height={230} />
        <Skeleton className={s.skeleton} height={230} />
      </div>
    );
  } else if (error) {
    content = (
      <Text theme={TextTheme.ERROR} title={t("An error occurred while loading the article")} align={TextAlign.CENTER} />
    );
  } else {
    content = <div>data</div>;
  }

  return (
    <DynamicModuleLoader removeAfterUnmout reducers={reducers}>
      <div className={s.articleDetails}>{content}</div>
    </DynamicModuleLoader>
  );
});
