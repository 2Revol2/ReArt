import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
  title: "entities/Comment/CommentList",
  component: CommentList,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: "1",
        user: { id: "1", username: "user" },
        text: "hello",
      },
      {
        id: "2",
        user: { id: "2", username: "admin" },
        text: "world",
      },
      {
        id: "3",
        user: { id: "2", username: "admin" },
        text: "!",
      },
    ],
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};
