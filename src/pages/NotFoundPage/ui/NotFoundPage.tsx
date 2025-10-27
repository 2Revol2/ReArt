import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";
import { Text } from "@/shared/ui/Text";
import { Page } from "@/widgets/Page";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={s.notFoundPage}>
      <Text title={t("errors.NotFoundPage")} />
    </Page>
  );
};
