import { memo } from "react";
import s from "./ArticleTextBlockComponent.module.scss";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ block }: ArticleTextBlockComponentProps) => {
  return (
    <div>
      {block.title && <Text title={block.title} className={s.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={s.paragraph} />
      ))}
    </div>
  );
});
