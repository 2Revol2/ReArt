import { memo } from "react";
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "@/shared/ui/Code";
import s from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={s.ArticleCodeBlockComponent}>
      <Code text={block.code} />
    </div>
  );
});
