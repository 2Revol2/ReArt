import { memo } from "react";
import s from "./CommentItem.module.scss";
import { Comment } from "../../model/types/comment";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig";
import { HStack, VStack } from "@/shared/ui/Stack";

interface CommentItemProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack max gap="8" className={classNames(s.commentItem, {}, [className])}>
        <HStack gap="8" max align="center">
          <Skeleton borderRadius="50%" width={30} height={30} />
          <Skeleton width={100} height={30} />
        </HStack>
        <Skeleton width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack max gap="8" className={classNames(s.commentItem, {}, [className])}>
      <AppLink to={`${RoutePaths.profile}${comment.user.id}`}>
        <HStack gap="8" max align="center">
          {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} alt={comment.user.username} />}
          <Text text={comment.user.username} />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
});
