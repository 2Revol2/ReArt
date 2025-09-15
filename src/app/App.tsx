import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { getUserInited, userActions } from "@/entities/User";

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content_wrapper">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
