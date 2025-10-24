import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
};
export const PrimaryDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
};
PrimaryDark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const PrimaryRed: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
};
PrimaryRed.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story)];

export const Secondary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
};
SecondaryDark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const SecondaryRed: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
};
SecondaryRed.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story)];
