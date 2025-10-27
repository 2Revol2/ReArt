import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { useGetProfileRating, useRateProfile } from "../../api/profileRatingApi";
import { Skeleton } from "@/shared/ui/Skeleton";

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = (props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const userData = useSelector(getUserAuthData);
  const { t } = useTranslation("article");

  const { data, isLoading } = useGetProfileRating({ userId: userData?.id ?? "", profileId });
  const [mutation] = useRateProfile();

  const handleMutation = useCallback(
    (stars: number, feedback?: string) => {
      try {
        mutation({ rating: stars, feedback, userId: userData?.id ?? "", profileId });
      } catch (e) {
        console.error(e);
      }
    },
    [profileId, mutation, userData?.id],
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

export default ProfileRating;
