import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import s from "./ArticleListItem.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Article, ArticleTextBlock } from "../../model/types/article";
import { ArticleView, ArticleBlockType } from "../../model/consts/consts";
import { Text } from "@/shared/ui/Text/Text";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Card } from "@/shared/ui/Card/Card";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button } from "@/shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { RoutePaths } from "@/shared/constants/router";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const types = <Text className={s.types} text={article.type.join(", ")} />;
  const views = (
    <div className={s.views}>
      <Text text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </div>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find((item) => item.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
      <div className={classNames(s.ArticleListItem, {}, [className, s[view]])}>
        <Card>
          <div className={s.header}>
            <div className={s.userWrapper}>
              <Avatar size={30} src={article.user.avatar} alt={article.user.username} />
              <Text text={article.user.username} />
            </div>
            <Text text={article.createdAt} />
          </div>
          <Text className={s.title} title={article.title} />
          {types}
          <img src={article.img} alt={article.title} className={s.img} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />}
          <div className={s.footer}>
            <AppLink target={target} to={RoutePaths.acticles_details + article.id}>
              <Button>{t("Read more")}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePaths.acticles_details + article.id}
      className={classNames(s.ArticleListItem, {}, [className, s[view]])}
    >
      <Card>
        <div className={s.imgWrapper}>
          <img src={article.img} alt={article.title} className={s.img} />
          <Text className={s.date} text={article.createdAt} />
        </div>
        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={s.title} title={article.title} />
      </Card>
    </AppLink>
  );
});
