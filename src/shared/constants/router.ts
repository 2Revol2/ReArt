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
