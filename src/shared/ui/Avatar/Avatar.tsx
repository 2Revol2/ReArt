import { CSSProperties, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Avatar.module.scss";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export const Avatar = ({ src, alt, className, size = 100 }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return <img src={src} alt={alt} style={styles} className={classNames(s.avatar, {}, [className])} />;
};
