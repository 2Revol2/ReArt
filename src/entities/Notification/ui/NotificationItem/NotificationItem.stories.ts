import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";
import { Notification } from "../../model/types/notification";

const notification: Notification = {
  id: "1",
  title: "Уведомление 1",
  description: "Произошло какое-то событие",
};

const meta: Meta<typeof NotificationItem> = {
  title: "entities/Notification/NotificationItem",
  component: NotificationItem,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Light: Story = {
  args: { item: notification },
  parameters: {},
};
