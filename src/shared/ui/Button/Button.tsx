import { ButtonHTMLAttributes, memo, ReactNode } from "react";
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
  disabled?: boolean;
}

export const Button = memo(
  ({ children, className, theme, square, size, disabled, ...otherProps }: ButtonProps) => {
    const mods = { [s.square]: square, [s.disabled]: disabled };

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
