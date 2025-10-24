import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof Spinner> = {
  title: "shared/Spinner",
  component: Spinner,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};
Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const Red: Story = {
  args: {},
};
Red.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story)];
