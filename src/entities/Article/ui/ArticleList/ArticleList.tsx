import { HTMLAttributeAnchorTarget, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import s from "./ArticleList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { PAGE_ID } from "@/shared/constants/common";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeleton = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 10 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
};

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;
  const { t } = useTranslation();
  const isBig = view === ArticleView.BIG;

  if (!isLoading && !articles.length) {
    return <Text size={TextSize.L} title={t("No articles found")} />;
  }

  return (
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({ width, height, registerChild, scrollTop, onChildScroll }) => {
        const validWidth = typeof width === "number" && width > 0 ? width : 1200;

        const itemsPerRow = isBig ? 1 : Math.max(1, Math.floor(validWidth / 300));
        const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

        const rowRenderer = ({ index, key, style }: ListRowProps) => {
          const items = [];
          const fromIndex = index * itemsPerRow;
          const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

          for (let i = fromIndex; i < toIndex; i++) {
            items.push(
              <ArticleListItem
                className={s.card}
                article={articles[i]}
                key={articles[i].id}
                view={view}
                target={target}
              />,
            );
          }

          return (
            <div key={key} className={s.row} style={style}>
              {items}
            </div>
          );
        };
        return (
          <div ref={registerChild} className={classNames(s.articleList, {}, [className, s[view]])}>
            <List
              height={height || 700}
              autoHeight
              rowCount={rowCount}
              rowHeight={isBig ? 600 : 350}
              rowRenderer={rowRenderer}
              width={width ? width - 50 : 1200}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
            />
            {isLoading && getSkeleton(view)}
          </div>
        );
      }}
    </WindowScroller>
  );
});
