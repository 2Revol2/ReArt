import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      <p>{t("AboutUs")}</p>
    </div>
  );
};
export default AboutPage;
