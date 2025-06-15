import { memo } from "react";
import s from "./CommentItem.module.scss";
import { Comment } from "../../model/types/comment";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig";

interface CommentItemProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(s.commentItem, {}, [className])}>
        <div className={s.header}>
          <Skeleton borderRadius="50%" width={30} height={30} />
          <Skeleton width={100} height={30} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(s.commentItem, {}, [className])}>
      <AppLink to={`${RoutePaths.profile}${comment.user.id}`} className={s.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={comment.user.username} />}
        <Text text={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
});
