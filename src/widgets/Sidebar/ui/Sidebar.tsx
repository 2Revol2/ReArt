import { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig";
import MainIncon from "@/shared/assets/icons/main.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";

export const Sidebar = () => {
  const { t } = useTranslation();
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
        <AppLink className={s.link} to={RoutePaths.main}>
          <MainIncon className={s.icon} />
          {!collapsed && <span> {t("main")}</span>}
        </AppLink>
        <AppLink className={s.link} to={RoutePaths.about}>
          <AboutIcon className={s.icon} />
          {!collapsed && <span> {t("aboutUs")}</span>}
        </AppLink>
      </div>

      <div className={s.switchers}>
        <div className={s.themeButton}>
          <ThemeSwitcher />
        </div>
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
};
