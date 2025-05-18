import { memo, useState } from "react";
import s from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { SidebarItemList } from "../../model/item";
import { SidebarItem } from "../SidebarItem/SidebarItem";

export const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div data-testid="sidebar" className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [])}>
      <Button
        className={s.collapseBtn}
        theme={ButtonTheme.BACKGROUND}
        data-testid="sidebar-toggle"
        onClick={toggleSidebar}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={s.links}>
        {SidebarItemList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>

      <div className={s.switchers}>
        <div className={s.themeButton}>
          <ThemeSwitcher />
        </div>
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
});
