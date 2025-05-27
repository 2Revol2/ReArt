import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo(({ className, short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button theme={ButtonTheme.OUTLINE} className={classNames(s.button, {}, [className])} onClick={toggleLanguage}>
      {t(short ? "language.short" : "language.long")}
    </Button>
  );
});
