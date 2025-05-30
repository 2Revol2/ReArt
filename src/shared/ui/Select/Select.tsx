import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Select.module.scss";

interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionList = useMemo(() => {
    return options?.map((item) => (
      <option className={s.option} key={item.value} value={item.value}>
        {item.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(s.wrapper, { [s.readonly]: readonly }, [className])}>
      {label && <span>{`${label}>`}</span>}
      <select disabled={readonly} onChange={onChangeHandler} value={value} className={s.select}>
        {optionList}
      </select>
    </div>
  );
});
