import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import s from "./CreateArticleCodeBlock.module.scss";
import { ArticleCodeBlock } from "@/entities/Article/model/types/article";
import { Input } from "@/shared/ui/Input/Input";
import { Text } from "@/shared/ui/Text/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Textarea } from "@/shared/ui/Textarea/Textarea";

interface CreateArticleCodeBlockProps {
  block: ArticleCodeBlock;
  onChange?: (id: string, changes: Partial<ArticleCodeBlock>) => void;
  removeArticleBlock: (id: string) => void;
}

export const CreateArticleCodeBlock = memo((props: CreateArticleCodeBlockProps) => {
  const { block, onChange, removeArticleBlock } = props;
  const { t } = useTranslation("createAndEditArticle");
  const onChangeCode = useCallback(
    (value: string) => {
      onChange?.(block.id, { code: value });
    },
    [block.id, onChange],
  );
  const removeHandler = () => {
    removeArticleBlock(block.id);
  };
  return (
    <VStack max justify="between" gap="8" className={s.codeBlock}>
      <HStack max justify="between">
        <Text title={t("Code block")} />
        <Button onClick={removeHandler} theme={ButtonTheme.CLEAR}>
          X
        </Button>
      </HStack>

      <Textarea className={s.textarea} value={block.code} onChange={onChangeCode} placeholder={t("Enter code")} />
    </VStack>
  );
});
