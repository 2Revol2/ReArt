import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import { RoutePaths } from "@/shared/constants/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getCanEditArticle } from "../../model/selectors/article/article";
import { getArticleDetailsData } from "@/entities/Article";
import { HStack } from "@/shared/ui/Stack";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const { t } = useTranslation("article");
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.acticles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePaths.acticles_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack justify="between" max className={classNames("", {}, [className])}>
      <Button onClick={onBackToList}>{t("Back to list")}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t("Edit")}</Button>}
    </HStack>
  );
});
