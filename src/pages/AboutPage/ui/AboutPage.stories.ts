import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof AboutPage> = {
  title: "pages/AboutPage",
  component: AboutPage,
  parameters: {},
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};
Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
