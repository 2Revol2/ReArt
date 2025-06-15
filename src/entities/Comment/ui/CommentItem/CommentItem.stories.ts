import type { Meta, StoryObj } from "@storybook/react";
import { CommentItem } from "./CommentItem";

const meta: Meta<typeof CommentItem> = {
  title: "entities/Comment/CommentItem",
  component: CommentItem,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof CommentItem>;

export const Default: Story = {
  args: {
    comment: {
      id: "1",
      user: { id: "1", username: "user" },
      text: "hello",
    },
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};
