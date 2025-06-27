import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import s from "./CreateArticleImageBlock.module.scss";
import { ArticleImageBlock } from "@/entities/Article/model/types/article";
import { Input } from "@/shared/ui/Input/Input";
import { Text } from "@/shared/ui/Text/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface CreateArticleImageBlockProps {
  block: ArticleImageBlock;
  onChange?: (id: string, changes: Partial<ArticleImageBlock>) => void;
  removeArticleBlock: (id: string) => void;
}

export const CreateArticleImageBlock = memo((props: CreateArticleImageBlockProps) => {
  const { block, onChange, removeArticleBlock } = props;
  const { t } = useTranslation("createAndEditArticle");

  const onChageTitle = useCallback(
    (value: string) => {
      onChange?.(block.id, { title: value });
    },
    [block?.id, onChange],
  );

  const onChageSrc = useCallback(
    (value: string) => {
      onChange?.(block.id, { src: value });
    },
    [block?.id, onChange],
  );
  const removeHandler = () => {
    removeArticleBlock(block.id);
  };

  return (
    <div className={s.imageBlock}>
      <div className={s.header}>
        <Text title={t("Image block")} />
        <Button onClick={removeHandler} theme={ButtonTheme.CLEAR}>
          X
        </Button>
      </div>

      <Input value={block?.src} placeholder={t("Enter src")} onChange={onChageSrc} />
      <img src={block.src} alt="" width={150} />
      <Input value={block?.title} placeholder={t("Enter title")} onChange={onChageTitle} />
    </div>
  );
});
