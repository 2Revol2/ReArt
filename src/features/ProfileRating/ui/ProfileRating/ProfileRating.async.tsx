import { lazy, Suspense } from "react";
import { ProfileRatingProps } from "./ProfileRating";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

const ProfileRatingLazy = lazy(() => import("./ProfileRating"));

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={100} />}>
      <ProfileRatingLazy {...props} />
    </Suspense>
  );
};
