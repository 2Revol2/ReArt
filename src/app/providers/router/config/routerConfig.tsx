import { UserRoles } from "@/entities/User";
import { AboutPage } from "@/pages/AboutPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ArcticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArcticlesPage } from "@/pages/ArticlesPage";
import { CreateAndEditArticlePage } from "@/pages/CreateAndEditArticlePage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { AppRoutesProps } from "@/shared/types/router";
import { AppRoutes, RoutePaths } from "@/shared/constants/router";

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
