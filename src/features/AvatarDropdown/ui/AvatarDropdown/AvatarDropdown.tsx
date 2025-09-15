import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getIsUserAdmin, getIsUserManager, getUserAuthData, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import { RoutePaths } from "@/shared/constants/router";
import { classNames } from "@/shared/lib/classNames/classNames";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);

  const dispatch = useAppDispatch();
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      trigger={<Avatar size={40} src={authData.avatar} />}
      className={classNames("", {}, [className])}
      items={[
        ...(isAdminPanelAvailable ? [{ content: t("links.Admin"), href: RoutePaths.admin_panel }] : []),
        { content: t("links.Profile"), href: `${RoutePaths.profile + authData.id}` },
        { content: t("actions.Logout"), onClick: onLogout },
      ]}
      direction="bottom left"
    />
  );
});
