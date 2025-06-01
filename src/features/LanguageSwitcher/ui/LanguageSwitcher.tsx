import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface LanguageSwitcherProps {
  short?: boolean;
}

export const LanguageSwitcher = memo(({ short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button theme={ButtonTheme.OUTLINE} onClick={toggleLanguage}>
      {t(short ? "language.short" : "language.long")}
    </Button>
  );
});
