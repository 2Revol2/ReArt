import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from "react";
import s from "./Textarea.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "readOnly">;

interface TextareaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Textarea = memo(
  ({ className, value, onChange, placeholder, autofocus, readonly, ...otherProps }: TextareaProps) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    const resizeTextarea = () => {
      const el = ref.current;
      if (el) {
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      }
    };

    useEffect(() => {
      resizeTextarea();
    }, [value]);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={classNames(s.textareaWrapper, { [s.readonly]: readonly }, [className])}>
        {placeholder && <div className={s.placeholder}>{`${placeholder}>`}</div>}

        <textarea
          ref={ref}
          value={value}
          onChange={onChangeHandler}
          readOnly={readonly}
          {...otherProps}
          className={s.textarea}
        />
      </div>
    );
  },
);
