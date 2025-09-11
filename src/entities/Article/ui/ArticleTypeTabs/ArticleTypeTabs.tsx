import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs } from "@/shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/consts/consts";

interface ArticleTypeTabsProps {
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { value, onChangeType } = props;
  const { t } = useTranslation();

  const onTabClick = useCallback(
    (type: TabItem) => {
      onChangeType(type.value as ArticleType);
    },
    [onChangeType],
  );

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t("ALL") },
      { value: ArticleType.IT, content: t("IT") },
      { value: ArticleType.ECONOMICS, content: t("ECONOMICS") },
      { value: ArticleType.SCIENCE, content: t("SCIENCE") },
    ],
    [t],
  );

  return <Tabs onTabClick={onTabClick} value={value} tabs={typeTabs} />;
});
