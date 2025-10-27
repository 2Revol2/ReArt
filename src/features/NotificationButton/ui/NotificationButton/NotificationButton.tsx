import { useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import { Popover } from "@/shared/ui/Popups";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { NotificationList } from "@/entities/Notification";
import s from "./NotificationButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Drawer } from "@/shared/ui/Drawer";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover className={classNames("", {}, [className])} trigger={trigger}>
          <NotificationList className={s.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
};
