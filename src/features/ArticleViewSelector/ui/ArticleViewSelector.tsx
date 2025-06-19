import { memo } from "react";
import s from "./ArticleViewSelector.module.scss";
import { ArticleView } from "@/entities/Article";
import ListIcon from "@/shared/assets/icons/list.svg";
import TiledIcon from "@/shared/assets/icons/tiled.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ArticleViewSelectorProps {
  view?: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { view, onViewClick } = props;

  const onChangeViewHandler = (view: ArticleView) => {
    onViewClick?.(view);
  };

  return (
    <div>
      {viewTypes.map((item) => (
        <Button key={item.view} theme={ButtonTheme.CLEAR} onClick={() => onChangeViewHandler(item.view)}>
          <Icon Svg={item.icon} className={classNames("", { [s.active]: view === item.view }, [])} />
        </Button>
      ))}
    </div>
  );
});
