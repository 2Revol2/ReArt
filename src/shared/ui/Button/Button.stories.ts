import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
  },
};
OutlineDark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR,
  },
};

export const Background: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
