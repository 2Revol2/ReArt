import { MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import s from "./Page.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useInifinteScroll } from "@/shared/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { getScrollByPath, scrollRecoveryActions } from "@/features/ScrollRecovery";
import { useInitialEffect } from "@/shared/hooks/useInitialEffect/useInitialEffect";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useThrottle } from "@/shared/hooks/useThrottle/useThrottle";
import { PAGE_ID } from "@/shared/constants/common";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));
  const dispatch = useAppDispatch();

  useInifinteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollRecoveryActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 500);

  return (
    <section id={PAGE_ID} onScroll={onScroll} ref={wrapperRef} className={classNames(s.page, {}, [className])}>
      {children}
      {onScrollEnd ? <div ref={triggerRef} className={s.trigger} /> : null}
    </section>
  );
};
