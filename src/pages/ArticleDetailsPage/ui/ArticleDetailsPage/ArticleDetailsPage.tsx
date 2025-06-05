import { memo } from "react";
import { useTranslation } from "react-i18next";

const ArticleDetailsPage = () => {
  const { t } = useTranslation("article");
  return <div>ArticleDetailsPage</div>;
};
export default memo(ArticleDetailsPage);
