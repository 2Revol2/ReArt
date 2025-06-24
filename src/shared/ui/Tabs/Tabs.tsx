import { memo, ReactNode, useCallback } from "react";
import s from "./Tabs.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandler = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <div className={classNames(s.Tabs, {}, [className])}>
      {tabs.map((item) => (
        <Card
          className={s.tab}
          key={item.value}
          onClick={clickHandler(item)}
          theme={item.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
        >
          {item.content}
        </Card>
      ))}
    </div>
  );
});
