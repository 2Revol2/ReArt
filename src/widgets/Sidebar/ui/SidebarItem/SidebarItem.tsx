import { useTranslation } from "react-i18next";
import { memo } from "react";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./SidebarItem.module.scss";
import { SidebarItemType } from "../../model/item";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink className={s.link} to={item.path}>
      <item.Icon className={s.icon} />
      {!collapsed && <span> {t(item.text)}</span>}
    </AppLink>
  );
});
