import { classNames } from "@/shared/lib/classNames/classNames";
import "./Spinner.scss";

export const Spinner = () => {
  return (
    <div className={classNames("lds-ring", {}, [])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
