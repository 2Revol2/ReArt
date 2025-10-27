import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { AddNewComment } from "@/features/AddNewComment";
import { CommentList } from "@/entities/Comment";
import { getArticleCommets } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleDetailsCommentsIsLoading } from "../../model/selectors/comments/commets";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation("article");
  const comments = useSelector(getArticleCommets.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );
  return (
    <VStack className={classNames("", {}, [className])} gap="8" max>
      <Text title={t("Comments")} />
      <AddNewComment onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  );
});
