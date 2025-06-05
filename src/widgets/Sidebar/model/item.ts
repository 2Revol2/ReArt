import { RoutePaths } from "@/shared/config/routeConfig/routeConfig";
import MainIcon from "@/shared/assets/icons/main.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
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
  {
    path: RoutePaths.profile,
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
];
