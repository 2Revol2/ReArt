import { memo } from "react";
import s from "./Skeleton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
}

export const Skeleton = memo(({ className, height, width, borderRadius }: SkeletonProps) => {
  return <div className={classNames(s.skeleton, {}, [className])} style={{ height, width, borderRadius }} />;
});
