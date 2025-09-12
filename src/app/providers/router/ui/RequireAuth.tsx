import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserAuthData, getUserRoles, UserRoles } from "@/entities/User";
import { RoutePaths } from "@/shared/constants/router";

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRoles[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);
  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePaths.forbidden} state={{ from: location }} replace />;
  }

  return children;
};
