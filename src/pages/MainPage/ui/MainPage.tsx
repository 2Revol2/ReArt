import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t } = useTranslation("main");

  return (
    <div>
      <p>{t("MainPage")}</p>
    </div>
  );
}
