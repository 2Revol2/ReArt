import { Fragment, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Dropdown.module.scss";
import { DropdownDirection } from "@/shared/types/ui";
import { AppLink } from "../AppLink/AppLink";

export interface DropdownItems {
  disabled?: boolean;
  onClick?: () => void;
  content?: ReactNode;
  href?: string;
}

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: DropdownItems[];
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  "bottom left": s.optionsBottomLeft,
  "bottom right": s.optionsBottomRight,
  "top left": s.optionsTopLeft,
  "top right": s.optionsTopRight,
};

export const Dropdown = ({ className, trigger, items, direction = "bottom left" }: DropdownProps) => {
  return (
    <Menu as="div" className={classNames(s.dropdown, {}, [className])}>
      <Menu.Button className={s.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(s.items, {}, [mapDirectionClass[direction]])}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              onClick={item.onClick}
              className={classNames(s.item, { [s.active]: active }, [])}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
