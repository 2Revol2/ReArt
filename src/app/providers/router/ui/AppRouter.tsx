import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutesProps } from "@/shared/types/router";
import { routerConfig } from "../config/routerConfig";
import { PageLoader } from "@/widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>;
});
