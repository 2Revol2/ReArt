import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonTheme } from "./Button";
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
