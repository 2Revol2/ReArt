import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Popover } from "@/shared/ui/Popups";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { NotificationList } from "@/entities/Notification";
import s from "./NotificationButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props;
  return (
    <Popover
      className={classNames("", {}, [className])}
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} />
        </Button>
      }
    >
      <NotificationList className={s.notifications} />
    </Popover>
  );
};
