import { useTranslation } from "react-i18next";
import s from "./PageError.module.scss";
import { Button } from "@/shared/ui/Button/Button";
export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={s.pageError}>
      <h3>{t("anErrorOccurred")}</h3>
      <Button onClick={reloadPage}>{t("reloadPage")}</Button>
    </div>
  );
};
