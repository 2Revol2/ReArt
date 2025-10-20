import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { useGetArticleRating, useRateArticle } from "../../api/articleRatingApi";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const userData = useSelector(getUserAuthData);
  const { t } = useTranslation("article");

  const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? "", articleId });
  const [mutation] = useRateArticle();

  const handleMutation = useCallback(
    (stars: number, feedback?: string) => {
      try {
        mutation({ rating: stars, feedback, userId: userData?.id ?? "", articleId });
      } catch (e) {
        console.error(e);
      }
    },
    [articleId, mutation, userData?.id],
  );

  const onAccept = useCallback(
    (stars: number, feedback?: string) => {
      handleMutation(stars, feedback);
    },
    [handleMutation],
  );
  const onCancel = useCallback(
    (stars: number) => {
      handleMutation(stars);
    },
    [handleMutation],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={100} />;
  }

  const rate = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rating={rate?.rating}
      className={className}
      hasFeedback
      title={t("Your review")}
      feedbackTitle={t("Your feedback will help us improve the quality")}
    />
  );
};

export default ArticleRating;
