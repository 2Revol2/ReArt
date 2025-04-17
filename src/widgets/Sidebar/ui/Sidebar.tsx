import { useState } from "react";
import s from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
    console.log(collapsed);
  };
  return (
    <div className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [])}>
      <button onClick={toggleSidebar}>toggle</button>

      <div className={s.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
