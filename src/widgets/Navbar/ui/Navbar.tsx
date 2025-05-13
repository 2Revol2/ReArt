import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onShowModal} type="button">
        {t("login")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
