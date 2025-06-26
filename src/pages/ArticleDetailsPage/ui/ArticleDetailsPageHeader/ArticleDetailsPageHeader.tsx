import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import s from "./ArticleDetailsPageHeader.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getCanEditArticle } from "../../model/selectors/article/article";
import { getArticleDetailsData } from "@/entities/Article";

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
    <div className={classNames(s.header, {}, [className])}>
      <Button onClick={onBackToList}>{t("Back to list")}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t("Edit")}</Button>}
    </div>
  );
});
