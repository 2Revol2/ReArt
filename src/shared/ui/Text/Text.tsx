import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextSize {
  S = "size_s",
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
  "data-testid"?: string;
}

type HeaderTagType = "h2" | "h3" | "h4";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: "h4",
  [TextSize.M]: "h3",
  [TextSize.L]: "h2",
};

export const Text = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    "data-testid": dataTestId,
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];
    return (
      <div className={classNames(s.text, {}, [className, s[theme], s[align], s[size]])}>
        {title && (
          <HeaderTag data-testid={`${dataTestId}.Header`} className={s.title}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p data-testid={`${dataTestId}.Paragraph`} className={s.text}>
            {text}
          </p>
        )}
      </div>
    );
  },
);
