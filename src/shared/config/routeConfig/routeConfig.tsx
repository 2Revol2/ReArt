import { RouteProps } from "react-router-dom";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ArcticlesPage } from "@/pages/ArticlesPage";
import { ArcticleDetailsPage } from "@/pages/ArticleDetailsPage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export const enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ACTICLES = "acticles",
  ACTICLES_DETAILS = "acticles_details",

  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/",
  [AppRoutes.ACTICLES]: "/articles",
  [AppRoutes.ACTICLES_DETAILS]: "/articles/",

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

  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
