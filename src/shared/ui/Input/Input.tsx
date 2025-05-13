import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import s from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...otherProps
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (e: any) => {
      setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
      <div className={classNames(s.inputWrapper)}>
        {placeholder && <div className={s.placeholder}>{`${placeholder}>`}</div>}
        <div className={s.caretWrapper}>
          <input
            ref={ref}
            value={value}
            type={type}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChangeHandler}
            onSelect={onSelect}
            {...otherProps}
            className={s.input}
          />
          {isFocused && <span className={s.caret} style={{ left: `${caretPosition * 10}px` }} />}
        </div>
      </div>
    );
  },
);
