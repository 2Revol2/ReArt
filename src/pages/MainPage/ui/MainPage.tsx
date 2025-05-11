import { useTranslation } from "react-i18next";
import { Counter } from "@/entities/Counter/ui/Counter";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <p>{t("MainPage")}</p>
      <Counter />
    </div>
  );
};
export default MainPage;
