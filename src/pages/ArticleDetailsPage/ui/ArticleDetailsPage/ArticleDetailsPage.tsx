import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "@/entities/Article";
import { Text } from "@/shared/ui/Text/Text";
import { CommentList } from "@/entities/Comment";
import s from "./ArticleDetailsPage.module.scss";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleCommets } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleDetailsCommentsIsLoading } from "../../model/selectors/comments/commets";
import { useInitialEffect } from "@/shared/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddNewComment } from "@/features/AddNewComment";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Page } from "@/widgets/Page/Page";
import { getArticleRecommendations } from "../../model/slice/articleDetailsRecommendationsSlice";
import { getArticleDetailsRecommendationsIsLoading } from "../../model/selectors/recommendations/recommendations";
import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";
// eslint-disable-next-line max-len
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation("article");
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleCommets.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  if (!id) {
    return <Page className={s.articleDetailsPage}>{t("Article not found")}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
      <Page className={s.articleDetailsPage}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <div className={s.recommendationsWrapper}>
          <Text title={t("Recommend")} />
          <ArticleList
            target="_blank"
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            className={s.recommendations}
          />
        </div>
        <div className={s.commentsWrapper}>
          <Text title={t("Comments")} />
          <AddNewComment onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticleDetailsPage);
