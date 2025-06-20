import { MutableRefObject, ReactNode, useRef } from "react";
import s from "./Page.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useInifinteScroll } from "@/shared/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInifinteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(s.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
