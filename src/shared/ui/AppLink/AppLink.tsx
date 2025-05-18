import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = memo(
  ({ children, theme = AppLinkTheme.PRIMARY, className, to, ...otherProps }: AppLinkProps) => {
    return (
      <Link to={to} className={classNames(s.appLink, {}, [className, s[theme]])} {...otherProps}>
        {children}
      </Link>
    );
  },
);
