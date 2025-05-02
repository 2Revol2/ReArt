import { useState } from "react";
import s from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { Button } from "@/shared/ui/Button/Button";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div data-testid="sidebar" className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [])}>
      <Button data-testid="sidebar-toggle" onClick={toggleSidebar}>
        toggle
      </Button>
      <div className={s.switchers}>
        <div className={s.themeButton}>
          <ThemeSwitcher />
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};
