import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  CLEAR = 'clear',
  THEME_BUTTON = 'themeButton',
  OUTLINE= 'ontline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: ButtonTheme;
  className?: string;
}

export const Button = ({
  children,
  className,
  theme,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={classNames(s.button, {}, [className, s[theme]])}
    >
      {children}
    </button>
  );
};
