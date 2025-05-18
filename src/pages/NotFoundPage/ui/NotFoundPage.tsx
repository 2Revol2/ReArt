import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";
import { Text } from "@/shared/ui/Text/Text";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={s.notFoundPage}>
      <Text title={t("errors.NotFoundPage")} />
    </div>
  );
};
