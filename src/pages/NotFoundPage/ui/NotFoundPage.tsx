import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return <div className={s.notFoundPage}>{t("pageNotFound")}</div>;
};
