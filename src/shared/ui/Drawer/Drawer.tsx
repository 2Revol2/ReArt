import { ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import s from "./Drawer.module.scss";
import { Overlay } from "../Overlay/Overlay";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Portal } from "../Portal/Portal";
import { useModal } from "@/shared/hooks/useModal/useModal";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { isClosing, isMounted, close } = useModal({
    onClose,
    animationDelay: 200,
    isOpen,
  });

  const { theme } = useTheme();

  const mods: Mods = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(s.drawer, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};
