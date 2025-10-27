import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import s from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItem } from "../../model/selectors/getSidebarItem";
import { VStack } from "@/shared/ui/Stack";

export const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItem);
  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => {
    return sidebarItemList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />);
  }, [sidebarItemList, collapsed]);

  return (
    <aside data-testid="sidebar" className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [])}>
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

      <VStack role="navigation" align="center" className={s.links} gap="16">
        {itemList}
      </VStack>

      <div className={s.switchers}>
        <div className={s.themeButton}>
          <ThemeSwitcher />
        </div>
        <LanguageSwitcher short={collapsed} />
      </div>
    </aside>
  );
});
