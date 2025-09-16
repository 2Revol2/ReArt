import { ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import s from "./Drawer.module.scss";
import { Overlay } from "../Overlay/Overlay";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Portal } from "../Portal/Portal";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {
  const { className, children, isOpen, onClose } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [s.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(s.drawer, mods, [className, theme])}>
        <Overlay onClick={onClose} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};
