import { useTranslation } from "react-i18next";
import { memo } from "react";
import s from "./ArticleRecommendationList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text/Text";
import { ArticleList } from "@/entities/Article";
import { useGetArticleRecommendationsList } from "../../model/api/articleRecommendationsApi";

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const { data, isLoading, error } = useGetArticleRecommendationsList(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <div className={classNames(s.ArticleRecommendationList, {}, [className])}>
      <Text title={t("Recommend")} />
      <ArticleList target="_blank" articles={data ?? []} className={s.recommendations} />
    </div>
  );
});
