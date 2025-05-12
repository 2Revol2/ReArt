import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content_wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
