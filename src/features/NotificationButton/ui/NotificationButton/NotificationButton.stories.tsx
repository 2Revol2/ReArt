import type { Meta, StoryObj } from "@storybook/react";
import { NotificationButton } from "./NotificationButton";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const notification = {
  title: "Уведомление 1",
  description: "Произошло какое-то событие",
};

const meta: Meta<typeof NotificationButton> = {
  title: "features/NotificationButton",
  component: NotificationButton,
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
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Default: Story = {
  args: {},
};
Default.decorators = [(Story) => StoreDecorator({})(Story)];
