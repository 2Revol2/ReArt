import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "@/entities/Article";
import { Text } from "@/shared/ui/Text/Text";
import { CommentList } from "@/entities/Comment";
import s from "./ArticleDetailsPage.module.scss";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsCommentsReducer, getArticleCommets } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleDetailsCommentsIsLoading } from "../../model/selectors/commets";
import { useInitialEffect } from "@/shared/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddNewComment } from "@/features/AddNewComment";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button } from "@/shared/ui/Button/Button";
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig";

const reducers: ReducersList = { articleDetailsComments: articleDetailsCommentsReducer };

const ArticleDetailsPage = () => {
  const { t } = useTranslation("article");
  const { id } = useParams();
  const comments = useSelector(getArticleCommets.selectAll);
  const dispatch = useAppDispatch();
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.acticles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  if (!id) {
    return <div>{t("Article not found")}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
      <div className={s.articleDetailsPage}>
        <Button onClick={onBackToList}>{t("Back to list")}</Button>
        <ArticleDetails id={id} />
        <div className={s.commentsWrapper}>
          <Text title={t("Comments")} className={s.comments} />
          <AddNewComment onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};
export default memo(ArticleDetailsPage);
