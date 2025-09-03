import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import s from "./Listbox.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from "../Stack";
import { DropdownDirection } from "@/shared/types/ui";

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  "bottom left": s.optionsBottomLeft,
  "bottom right": s.optionsBottomRight,
  "top left": s.optionsTopLeft,
  "top right": s.optionsTopRight,
};

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
      {label && <span className={classNames(s.label, { [s.disabled]: readonly }, [])}>{`${label}>`}</span>}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(s.listbox, { [s.disabled]: readonly }, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={s.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(s.optionsList, {}, [mapDirectionClass[direction]])}>
          {options?.map((option) => (
            <HListbox.Option key={option.value} value={option.value} as={Fragment} disabled={option.disabled}>
              {({ active, selected }) => (
                <li className={classNames(s.option, { [s.active]: active, [s.disabled]: option.disabled }, [])}>
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
