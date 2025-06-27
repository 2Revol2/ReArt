import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import s from "./CreateArticleTextBlock.module.scss";
import { ArticleTextBlock } from "@/entities/Article/model/types/article";
import { Input } from "@/shared/ui/Input/Input";
import { Text } from "@/shared/ui/Text/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Textarea } from "@/shared/ui/Textarea/Textarea";

interface CreateArticleTextBlockProps {
  onChange: (id: string, changes: Partial<ArticleTextBlock>) => void;
  block: ArticleTextBlock;
  removeArticleBlock: (id: string) => void;
}

export const CreateArticleTextBlock = memo((props: CreateArticleTextBlockProps) => {
  const { onChange, block, removeArticleBlock } = props;
  const { t } = useTranslation("createAndEditArticle");

  const onChangeTitle = useCallback(
    (value: string) => {
      onChange(block.id, { title: value });
    },
    [block.id, onChange],
  );

  const onAddParagraph = useCallback(() => {
    onChange(block.id, { paragraphs: [...block.paragraphs, ""] });
  }, [block.id, block.paragraphs, onChange]);

  const onChangeParagraph = useCallback(
    (id: number, value: string) => {
      const newParagraphs = block.paragraphs.map((paragraph, index) => {
        return index === id ? value : paragraph;
      });

      onChange(block.id, { paragraphs: newParagraphs });
    },
    [block.id, block.paragraphs, onChange],
  );

  const removeHandler = () => {
    removeArticleBlock(block.id);
  };

  return (
    <div className={s.textBlock}>
      <div className={s.header}>
        <Text title={t("Text block")} />
        <Button onClick={removeHandler} theme={ButtonTheme.CLEAR}>
          X
        </Button>
      </div>
      <Input value={block.title} onChange={onChangeTitle} placeholder={t("Enter title")} />
      {block.paragraphs.map((item, index) => (
        <Textarea
          value={item}
          placeholder={t("Enter paragraph")}
          onChange={(value) => onChangeParagraph(index, value)}
        />
      ))}
      <Button className={s.addBtn} onClick={onAddParagraph}>
        {t("Add paragraph")}
      </Button>
    </div>
  );
});
