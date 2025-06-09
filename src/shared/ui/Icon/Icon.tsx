import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Icon.module.scss";

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
  return <Svg className={classNames(s.icon, {}, [className])} />;
});
