import type { Meta, StoryObj } from "@storybook/react";
import { ArticleTypeTabs } from "./ArticleTypeTabs";

const meta: Meta<typeof ArticleTypeTabs> = {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabs,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Light: Story = {
  args: {},
};
