import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { Page } from "@/shared/ui/Page/Page";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={s.notFoundPage}>
      <Text title={t("errors.NotFoundPage")} />
    </Page>
  );
};
