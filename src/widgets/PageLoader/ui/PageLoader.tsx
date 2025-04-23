import { Spinner } from "@/shared/ui/Spinner/Spinner";
import s from "./PageLoader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(s.pageLoader, {}, [className])}>
      <Spinner />
    </div>
  );
};
