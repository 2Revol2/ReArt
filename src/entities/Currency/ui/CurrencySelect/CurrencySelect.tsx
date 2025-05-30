import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";
import { classNames } from "@/shared/lib/classNames/classNames";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const option = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation("profile");

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      onChange={onChangeHandler}
      value={value}
      className={classNames("", {}, [className])}
      label={t("Select currency")}
      options={option}
      readonly={readonly}
    />
  );
});
