import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData } from "@/entities/User";
import { Text } from "@/shared/ui/Text/Text";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePaths } from "@/shared/constants/router";
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from "@/features/NotificationButton";
import { AvatarDropdown } from "@/features/AvatarDropdown";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(s.authNavbar, {}, [className])}>
        <HStack align="center">
          <Text title="ReArt" className={s.logo} />
          <AppLink to={RoutePaths.acticles_create}>{t("Create an article")}</AppLink>
        </HStack>
        <HStack align="center" gap="16">
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
