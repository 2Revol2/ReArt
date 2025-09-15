import { memo } from "react";
import { useGetNotifications } from "../../api/notificationApi";
import { VStack } from "@/shared/ui/Stack";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useGetNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack className={classNames("", {}, [className])} gap="8">
        <Skeleton height={80} width="100%" borderRadius={5} />
        <Skeleton height={80} width="100%" borderRadius={5} />
        <Skeleton height={80} width="100%" borderRadius={5} />
      </VStack>
    );
  }

  return (
    <VStack className={classNames("", {}, [className])} gap="8">
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});
