import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onToggleModal} type="button">
        {t("login")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis culpa ullam
          placeat veritatis a totam obcaecati, qui doloremque atque voluptatibus molestias
        </p>
      </Modal>
    </div>
  );
};
