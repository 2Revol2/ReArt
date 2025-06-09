import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

export enum TextAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo(
  ({ className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M }: TextProps) => {
    return (
      <div className={classNames(s.text, {}, [className, s[theme], s[align], s[size]])}>
        {title && <p className={s.title}>{title}</p>}
        {text && <p className={s.text}>{text}</p>}
      </div>
    );
  },
);
