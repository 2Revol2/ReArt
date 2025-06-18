import { memo } from "react";
import { Article, ArticleView } from "@/entities/Article";
import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";

const ArticlesPage = () => {
  return (
    <div>
      <ArticleList articles={[]} view={ArticleView.BIG} />
    </div>
  );
};
export default memo(ArticlesPage);
