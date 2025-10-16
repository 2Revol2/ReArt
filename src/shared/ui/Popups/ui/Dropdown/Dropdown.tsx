import { Fragment, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Dropdown.module.scss";
import { DropdownDirection } from "@/shared/types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import { mapDirectionClass } from "../../styles/consts";
import popupStyles from "../../styles/popup.module.scss";

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

export const Dropdown = ({ className, trigger, items, direction = "bottom left" }: DropdownProps) => {
  return (
    <Menu as="div" className={classNames(s.dropdown, {}, [className, popupStyles.popup])}>
      <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(s.items, {}, [mapDirectionClass[direction]])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              onClick={item.onClick}
              className={classNames(s.item, { [popupStyles.active]: active }, [])}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} key={index} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
