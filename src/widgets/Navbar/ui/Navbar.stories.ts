import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
