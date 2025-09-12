import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { getIsUserAdmin, getIsUserManager, getUserAuthData } from "@/entities/User";
import { userActions } from "@/entities/User/model/slice/userSlice";
import { Text } from "@/shared/ui/Text/Text";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePaths } from "@/shared/constants/router";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { HStack } from "@/shared/ui/Stack";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);

  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(s.authNavbar, {}, [className])}>
        <HStack align="center">
          <Text title="ReArt" className={s.logo} />
          <AppLink to={RoutePaths.acticles_create}>{t("Create an article")}</AppLink>
        </HStack>
        <Dropdown
          trigger={<Avatar size={40} src={authData.avatar} />}
          items={[
            ...(isAdminPanelAvailable ? [{ content: t("links.Admin"), href: RoutePaths.admin_panel }] : []),
            { content: t("links.Profile"), href: `${RoutePaths.profile + authData.id}` },
            { content: t("actions.Logout"), onClick: onLogout },
          ]}
          direction="bottom left"
        />
      </header>
    );
  }

  return (
    <header className={classNames(s.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onShowModal} type="button">
        {t("actions.Login")}
      </Button>

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
