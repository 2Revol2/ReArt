import { RouteProps } from "react-router-dom";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ArcticlesPage } from "@/pages/ArticlesPage";
import { ArcticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { CreateAndEditArticlePage } from "@/pages/CreateAndEditArticlePage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { UserRoles } from "@/entities/User";
import { ForbiddenPage } from "@/pages/ForbiddenPage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};

export const enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ACTICLES = "acticles",
  ACTICLES_DETAILS = "acticles_details",
  ACTICLES_CREATE = "acticles_create",
  ACTICLES_EDIT = "acticles_edit",
  ADMIN_PANEL = "admin_panel",
  FORBIDDEN = "forbidden",

  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/",
  [AppRoutes.ACTICLES]: "/articles",
  [AppRoutes.ACTICLES_DETAILS]: "/articles/",
  [AppRoutes.ACTICLES_CREATE]: "/articles/new",
  [AppRoutes.ACTICLES_EDIT]: "/articles/:id/edit",
  [AppRoutes.ADMIN_PANEL]: "/admin",
  [AppRoutes.FORBIDDEN]: "/forbidden",

  [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ACTICLES]: {
    path: RoutePaths.acticles,
    element: <ArcticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ACTICLES_DETAILS]: {
    path: `${RoutePaths.acticles_details}:id`,
    element: <ArcticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ACTICLES_CREATE]: {
    path: RoutePaths.acticles_create,
    element: <CreateAndEditArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ACTICLES_EDIT]: {
    path: RoutePaths.acticles_edit,
    element: <CreateAndEditArticlePage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePaths.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePaths.forbidden,
    element: <ForbiddenPage />,
    authOnly: true,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
