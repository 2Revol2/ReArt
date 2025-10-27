import { memo } from "react";
import s from "./ArticleListItem.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleView } from "../../model/consts/consts";
import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
        <Card>
          <div className={s.header}>
            <div className={s.userWrapper}>
              <Skeleton width={30} height={30} borderRadius="50%" />
              <Skeleton width={120} height={16} />
            </div>
            <Skeleton width={80} height={16} />
          </div>
          <Skeleton width={250} height={32} className={s.title} />
          <Skeleton width="100%" height={200} className={s.img} />
          <Skeleton className={s.textBlock} width="100%" height={100} />
          <div className={s.footer}>
            <Skeleton width={130} height={42} />
            <Skeleton width={65} height={24} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
      <Card>
        <div className={s.imgWrapper}>
          <Skeleton width={250} height={250} className={s.img} />
        </div>
        <div className={s.infoWrapper}>
          <Skeleton width={120} height={16} />
        </div>
        <Skeleton width={220} height={24} />
      </Card>
    </div>
  );
});
