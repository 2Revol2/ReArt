import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Icon.module.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, ...otherProps } = props;
  return <Svg className={classNames(s.icon, {}, [className])} {...otherProps} />;
});
