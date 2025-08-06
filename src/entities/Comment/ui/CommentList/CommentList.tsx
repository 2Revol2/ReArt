import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Comment } from "../../model/types/comment";
import { CommentItem } from "../CommentItem/CommentItem";
import { Text } from "@/shared/ui/Text/Text";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames("", {}, [className])}>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames("", {}, [className])}>
      {comments?.length ? (
        comments?.map((comment) => <CommentItem isLoading={isLoading} key={comment?.id} comment={comment} />)
      ) : (
        <Text text={t("There are no comments yet")} />
      )}
    </VStack>
  );
});
