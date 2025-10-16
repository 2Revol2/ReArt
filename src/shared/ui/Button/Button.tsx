import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import s from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  THEME_BUTTON = "themeButton",
  OUTLINE = "ontline",
  SECONDARY = "secondary",
  PRIMARY = "primary",
  OUTLINE_RED = "ontlineRed",
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
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = memo(
  ({
    children,
    className,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    fullWidth,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = { [s.square]: square, [s.disabled]: disabled, [s.fullWidth]: fullWidth };

    return (
      <button
        type="button"
        disabled={disabled}
        {...otherProps}
        className={classNames(s.button, mods, [className, s[theme], s[size]])}
      >
        {children}
      </button>
    );
  },
);
