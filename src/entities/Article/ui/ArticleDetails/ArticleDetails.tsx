import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import s from "./ArticleDetails.module.scss";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/service/fetchArticleById/fetchArticleById";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { Text, TextAlign, TextSize, TextTheme } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import CalendarIcon from "@/shared/assets/icons/calendar.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { HStack, VStack } from "@/shared/ui/Stack";

interface ArticleDetailsProps {
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  const error = useSelector(getArticleDetailsError);
  const { t } = useTranslation("article");
  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <HStack max justify="center">
          <Skeleton borderRadius="50%" height={200} width={200} />
        </HStack>

        <Skeleton className={s.title} height={32} width={600} />
        <Skeleton className={s.skeleton} height={24} width={400} />
        <Skeleton className={s.skeleton} height={230} />
        <Skeleton className={s.skeleton} height={230} />
      </>
    );
  } else if (error) {
    content = (
      <Text theme={TextTheme.ERROR} title={t("An error occurred while loading the article")} align={TextAlign.CENTER} />
    );
  } else {
    content = (
      <VStack max>
        <HStack max justify="center">
          <Avatar src={article?.img} alt={article?.title} size={200} className={s.avatar} />
        </HStack>
        <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
        <HStack gap="8" align="center">
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack gap="8" align="center">
          <Icon Svg={CalendarIcon} />
          <Text text={String(article?.createdAt)} />
        </HStack>
        {article?.blocks.map(renderBlock)}
      </VStack>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmout reducers={reducers}>
      {content}
    </DynamicModuleLoader>
  );
});
