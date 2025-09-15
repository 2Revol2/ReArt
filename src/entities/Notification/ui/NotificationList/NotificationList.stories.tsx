import type { Meta, StoryObj } from "@storybook/react";
import { NotificationList } from "./NotificationList";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const notification = {
  title: "Уведомление 1",
  description: "Произошло какое-то событие",
};

const meta: Meta<typeof NotificationList> = {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Light: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [
          { ...notification, id: "1" },
          { ...notification, id: "2" },
          { ...notification, id: "3", href: "test" },
        ],
      },
    ],
  },
  decorators: [(Story) => StoreDecorator({})(Story)],
};
