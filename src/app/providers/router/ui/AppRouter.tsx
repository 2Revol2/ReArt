import { memo, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "@/shared/config/routeConfig/routeConfig";
import { PageLoader } from "@/widgets/PageLoader";
import { getUserAuthData } from "@/entities/User";

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routerConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route key={path} path={path} element={<div className="page_wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
});
