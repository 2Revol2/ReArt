import { ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import s from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";
import { useModal } from "@/shared/hooks/useModal/useModal";
import { useTheme } from "@/shared/hooks/useTheme/useTheme";

interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const { isClosing, isMounted, close } = useModal({
    onClose,
    animationDelay: ANIMATION_DELAY,
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
      <div className={classNames(s.modal, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};
