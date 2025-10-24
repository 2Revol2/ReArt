import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof Skeleton> = {
  title: "shared/Skeleton",
  component: Skeleton,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    height: 100,
    width: 100,
    borderRadius: "50%",
  },
};

export const PrimaryDark: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};
PrimaryDark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const CircleDark: Story = {
  args: {
    height: 100,
    width: 100,
    borderRadius: "50%",
  },
};
CircleDark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const PrimaryRed: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};
PrimaryRed.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story)];

export const CircleRed: Story = {
  args: {
    height: 100,
    width: 100,
    borderRadius: "50%",
  },
};

CircleRed.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story)];
