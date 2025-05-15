import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Title",
  },
};

export const OnlyText: Story = {
  args: {
    text: "text",
  },
};

export const Dark: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};
Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const OnlyTitleDark: Story = {
  args: {
    title: "Title",
  },
};
OnlyTitleDark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const OnlyTextDark: Story = {
  args: {
    text: "text",
  },
};
OnlyTextDark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const Error: Story = {
  args: {
    title: "Title",
    text: "text",
    theme: TextTheme.ERROR,
  },
};
