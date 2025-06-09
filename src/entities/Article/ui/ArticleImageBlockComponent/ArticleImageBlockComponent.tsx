import { memo } from "react";
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAlign } from "@/shared/ui/Text/Text";
import s from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ block }: ArticleImageBlockComponentProps) => {
  return (
    <div>
      <img src={block.src} alt={block.title} className={s.image} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
