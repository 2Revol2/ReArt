import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui/Select/Select";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const option = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation("profile");

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      onChange={onChangeHandler}
      value={value}
      className={classNames("", {}, [className])}
      label={t("Select county")}
      options={option}
      readonly={readonly}
    />
  );
});
