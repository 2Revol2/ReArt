import { memo } from "react";
import s from "./ArticleTextBlockComponent.module.scss";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text";

interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock;
  className?: string;
}

export const ArticleTextBlockComponent = memo(({ block, className }: ArticleTextBlockComponentProps) => {
  return (
    <div className={className}>
      {block.title && <Text title={block.title} className={s.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={s.paragraph} />
      ))}
    </div>
  );
});
