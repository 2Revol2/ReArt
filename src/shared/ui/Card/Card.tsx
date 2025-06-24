import { HTMLAttributes, ReactNode } from "react";
import s from "./Card.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = (props: CardProps) => {
  const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;
  return (
    <div {...otherProps} className={classNames(s.card, {}, [className, s[theme]])}>
      {children}
    </div>
  );
};
