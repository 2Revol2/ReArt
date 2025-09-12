import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { RoutePaths } from "@/shared/constants/router";
import MainIcon from "@/shared/assets/icons/main.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItem = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: RoutePaths.main,
      text: "links.Main",
      Icon: MainIcon,
    },
    {
      path: RoutePaths.about,
      text: "links.AboutUs",
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: RoutePaths.profile + userData.id,
        text: "links.Profile",
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePaths.acticles,
        text: "links.Articles",
        Icon: ArticleIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItemList;
});
