import type { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof StarRating> = {
  title: "shared/StarRating",
  component: StarRating,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof StarRating>;

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
