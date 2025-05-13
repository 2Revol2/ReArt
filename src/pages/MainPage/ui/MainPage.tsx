import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <p>{t("MainPage")}</p>
    </div>
  );
};
export default MainPage;
