import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData } from "@/entities/User";
import { userActions } from "@/entities/User/model/slice/userSlice";
import { Text } from "@/shared/ui/Text/Text";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
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

  if (authData) {
    return (
      <header className={classNames(s.authNavbar, {}, [className])}>
        <div className={s.wrapper}>
          <Text title="ReArt" className={s.logo} />
          <AppLink to={RoutePaths.acticles_create}>{t("Create an article")}</AppLink>
        </div>
        <Button theme={ButtonTheme.CLEAR} onClick={onLogout} type="button">
          {t("actions.Logout")}
        </Button>
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
