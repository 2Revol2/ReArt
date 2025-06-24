import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof Tabs> = {
  title: "shared/Tabs",
  component: Tabs,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Light: Story = {
  args: {
    tabs: [
      { value: "tab 1", content: "tab 1" },
      { value: "tab 2", content: "tab 2" },
      { value: "tab 3", content: "tab 3" },
    ],
    value: "tab 1",
  },
};
