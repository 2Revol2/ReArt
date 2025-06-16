import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { memo } from "react";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import s from "./SidebarItem.module.scss";
import { SidebarItemType } from "../../model/types/sidebar";
import { getUserAuthData } from "@/entities/User";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && item.authOnly) {
    return null;
  }
  return (
    <AppLink className={s.link} to={item.path}>
      <item.Icon className={s.icon} />
      {!collapsed && <span> {t(item.text)}</span>}
    </AppLink>
  );
});
