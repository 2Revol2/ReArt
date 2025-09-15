import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import s from "./Listbox.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "../../../Button/Button";
import { HStack } from "../../../Stack";
import { DropdownDirection } from "@/shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";
import popupStyles from "../../styles/popup.module.scss";

export interface ListboxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListboxProps {
  options?: ListboxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const Listbox = ({
  options,
  className,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = "bottom left",
  label,
}: ListboxProps) => {
  return (
    <HStack gap="4" align="center">
      {label && <span className={classNames(s.label, { [popupStyles.disabled]: readonly }, [])}>{`${label}>`}</span>}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(s.listbox, { [popupStyles.disabled]: readonly }, [className, popupStyles.popup])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={popupStyles.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(s.optionsList, {}, [mapDirectionClass[direction]])}>
          {options?.map((option) => (
            <HListbox.Option key={option.value} value={option.value} as={Fragment} disabled={option.disabled}>
              {({ active, selected }) => (
                <li
                  className={classNames(
                    s.option,
                    { [popupStyles.active]: active, [popupStyles.disabled]: option.disabled },
                    [],
                  )}
                >
                  {selected && "✓"}
                  {option.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
};
