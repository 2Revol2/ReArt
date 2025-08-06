import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import s from "./ArticleForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleBlockTypes, ArticleTypeItems } from "../../model/item";
import { createAndEditArticlePage } from "@/pages/CreateAndEditArticlePage/model/types/createAndEditArticlePage";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { ArticleType } from "@/entities/Article";
import { Text } from "@/shared/ui/Text/Text";
import {
  ArticleBlock,
  ArticleBlockType,
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
} from "@/entities/Article/model/types/article";
import { CreateArticleImageBlock } from "../CreateArticleImageBlock/CreateArticleImageBlock";
import { CreateArticleCodeBlock } from "../CreateArticleCodeBlock/CreateArticleCodeBlock";
import { CreateArticleTextBlock } from "../CreateArticleTextBlock/CreateArticleTextBlock";
import { VStack } from "@/shared/ui/Stack";

interface ArticleFormProps {
  className?: string;
  isEdit?: boolean;
  data?: createAndEditArticlePage;
  onChangeTitle?: (value: string) => void;
  onChangeImage?: (value: string) => void;
  onChangeSubtitle?: (value: string) => void;
  onChangeTypes?: (value: ArticleType) => void;
  addArticleBlock?: (type: ArticleBlockType) => void;
  updateImageBlock: (id: string, changes: Partial<ArticleImageBlock>) => void;
  updateCodeBlock: (id: string, changes: Partial<ArticleCodeBlock>) => void;
  updateTextBlock: (id: string, changes: Partial<ArticleTextBlock>) => void;
  removeArticleBlock: (id: string) => void;
  onUpdateArticle?: () => void;
  onCreateArticle?: () => void;
}

export const ArticleForm = memo((props: ArticleFormProps) => {
  const {
    className,
    data,
    isEdit,
    onChangeImage,
    onChangeSubtitle,
    onChangeTitle,
    onChangeTypes,
    addArticleBlock,
    updateImageBlock,
    updateCodeBlock,
    updateTextBlock,
    onUpdateArticle,
    onCreateArticle,
    removeArticleBlock,
  } = props;
  const { t } = useTranslation("createAndEditArticle");

  const renderCreateBlock = useCallback(
    (block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.IMAGE:
          return (
            <CreateArticleImageBlock
              removeArticleBlock={removeArticleBlock}
              onChange={updateImageBlock}
              key={block.id}
              block={block}
            />
          );
        case ArticleBlockType.CODE:
          return (
            <CreateArticleCodeBlock
              removeArticleBlock={removeArticleBlock}
              onChange={updateCodeBlock}
              key={block.id}
              block={block}
            />
          );
        case ArticleBlockType.TEXT:
          return (
            <CreateArticleTextBlock
              removeArticleBlock={removeArticleBlock}
              onChange={updateTextBlock}
              key={block.id}
              block={block}
            />
          );
        default:
          return null;
      }
    },
    [removeArticleBlock, updateCodeBlock, updateImageBlock, updateTextBlock],
  );

  const onChangeTypesHandler = useCallback(
    (item: ArticleType) => {
      return () => {
        onChangeTypes?.(item);
      };
    },
    [onChangeTypes],
  );

  const onAddBlockHandler = useCallback(
    (item: ArticleBlockType) => {
      return () => {
        addArticleBlock?.(item);
      };
    },
    [addArticleBlock],
  );

  const articleTypesList = useMemo(() => {
    return ArticleTypeItems.map((item) => (
      <Button
        theme={data?.type?.includes(item) ? ButtonTheme.SECONDARY : ButtonTheme.PRIMARY}
        onClick={onChangeTypesHandler(item)}
        key={item}
      >
        {item}
      </Button>
    ));
  }, [data?.type, onChangeTypesHandler]);

  const articleBlockTypesList = useMemo(() => {
    return ArticleBlockTypes.map((item) => (
      <Button key={item} onClick={onAddBlockHandler(item)}>
        add {item} block
      </Button>
    ));
  }, [onAddBlockHandler]);
  return (
    <VStack max gap="16" className={classNames(s.ArticleForm, {}, [className])}>
      <VStack gap="16" className={s.header}>
        <Input value={data?.title} onChange={onChangeTitle} placeholder={t("Enter title")} />
        <Input value={data?.img} onChange={onChangeImage} placeholder={t("Enter image")} />
        {data?.img && <img src={data?.img} alt={data?.title} width={200} />}
        <Input value={data?.subtitle} onChange={onChangeSubtitle} placeholder={t("Enter subtitle")} />
      </VStack>
      <div>
        <Text title={t("Choose a type of article")} />
        <div className={s.articleTypes}>{articleTypesList}</div>
      </div>
      {data?.blocks?.map(renderCreateBlock)}
      <div>{articleBlockTypesList}</div>
      {isEdit ? (
        <Button onClick={onUpdateArticle}>{t("Edit")}</Button>
      ) : (
        <Button onClick={onCreateArticle}>{t("Create")}</Button>
      )}
    </VStack>
  );
});
