import { memo } from "react";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import s from "./ThemeSwitcher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import Moon from "@/shared/assets/icons/moon.svg";
import Sun from "@/shared/assets/icons/sun.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import Heart from "@/shared/assets/icons/heart.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.THEME_BUTTON}
      onClick={toggleTheme}
      className={classNames(s.themeButton, {}, [className])}
    >
      {theme === Theme.DARK && <Moon className={s.icon} />}
      {theme === Theme.LIGHT && <Sun className={s.icon} />}
      {theme === Theme.RED && <Heart className={s.icon} />}
    </Button>
  );
});
