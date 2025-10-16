import { ReactNode } from "react";
import { Popover as HPopover } from "@headlessui/react";
import s from "./Popover.module.scss";
import popupStyles from "../../styles/popup.module.scss";
import { DropdownDirection } from "@/shared/types/ui";
import { classNames } from "@/shared/lib/classNames/classNames";
import { mapDirectionClass } from "../../styles/consts";

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const { className, trigger, direction = "bottom left", children } = props;
  return (
    <HPopover className={classNames(s.popover, {}, [className, popupStyles.popup])}>
      <HPopover.Button as="div" className={popupStyles.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(s.menu, {}, [mapDirectionClass[direction]])}>{children}</HPopover.Panel>
    </HPopover>
  );
};
