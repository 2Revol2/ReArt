import { memo, useCallback } from "react";
import s from "./Code.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";
import CopyIcon from "@/shared/assets/icons/copy.svg";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(s.code, {}, [className])}>
      <Button onClick={onCopy} className={s.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={s.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
