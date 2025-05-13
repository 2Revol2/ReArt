import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
