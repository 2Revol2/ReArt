import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  THEME_BUTTON = "themeButton",
  OUTLINE = "ontline",
  BACKGROUND = "background",
}
export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: ButtonTheme;
  className?: string;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = ({
  children,
  className,
  theme,
  square,
  size,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...otherProps}
      className={classNames(s.button, { [s.square]: square }, [className, s[theme], s[size]])}
    >
      {children}
    </button>
  );
};
