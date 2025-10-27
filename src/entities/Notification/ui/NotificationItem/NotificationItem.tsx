import { memo } from "react";
import s from "./NotificationItem.module.scss";
import type { Notification } from "../../model/types/notification";
import { Card, CardTheme } from "@/shared/ui/Card";
import { Text } from "@/shared/ui/Text";
import { classNames } from "@/shared/lib/classNames/classNames";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <Card className={classNames(s.notificationItem, {}, [className])} theme={CardTheme.OUTLINED}>
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a className={s.link} href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
