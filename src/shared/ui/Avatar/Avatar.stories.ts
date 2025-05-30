import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
    alt: "Аватарка",
  },
};

export const Small: Story = {
  args: {
    src: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
    alt: "Аватарка",
    size: 50,
  },
};
