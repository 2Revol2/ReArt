import { memo } from "react";
import s from "./Overlay.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;
  return <div onClick={onClick} className={classNames(s.overlay, {}, [className])} />;
});
