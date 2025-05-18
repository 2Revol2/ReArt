import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo(({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => {
  return (
    <div className={classNames(s.text, {}, [className, s[theme]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
