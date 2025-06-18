import { HTMLAttributes, ReactNode } from "react";
import s from "./Card.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <div {...otherProps} className={classNames(s.card, {}, [className])}>
      {children}
    </div>
  );
};
