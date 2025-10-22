import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import s from "./CreateArticleTextBlock.module.scss";
import { ArticleTextBlock } from "@/entities/Article";
import { Input } from "@/shared/ui/Input/Input";
import { Text } from "@/shared/ui/Text/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Textarea } from "@/shared/ui/Textarea/Textarea";
import { HStack, VStack } from "@/shared/ui/Stack";

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
    <VStack max justify="between" gap="8" className={s.textBlock}>
      <HStack max justify="between">
        <Text title={t("Text block")} />
        <Button onClick={removeHandler} theme={ButtonTheme.CLEAR}>
          X
        </Button>
      </HStack>
      <Input value={block.title} onChange={onChangeTitle} placeholder={t("Enter title")} />
      <VStack max gap="16">
        {block.paragraphs.map((item, index) => (
          <Textarea
            value={item}
            placeholder={t("Enter paragraph")}
            onChange={(value) => onChangeParagraph(index, value)}
            className={s.textarea}
          />
        ))}
      </VStack>

      <Button className={s.addBtn} onClick={onAddParagraph}>
        {t("Add paragraph")}
      </Button>
    </VStack>
  );
});
