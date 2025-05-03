import { useTranslation } from "react-i18next";
import s from "./PageError.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <div className={s.pageError}>
      <h3>{t("anErrorOccurred")}</h3>
      <Button theme={ButtonTheme.OUTLINE} onClick={reloadPage}>
        {t("reloadPage")}
      </Button>
    </div>
  );
};
