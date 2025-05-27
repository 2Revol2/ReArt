import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

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
Light.decorators = [(Story) => StoreDecorator({ loginForm: { username: "123", password: "123" } })(Story)];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  (Story) => ThemeDecorator(Theme.DARK)(Story),
  (Story) => StoreDecorator({ loginForm: { username: "123", password: "123" } })(Story),
];

export const WithError: Story = {
  args: {},
};
WithError.decorators = [
  (Story) =>
    StoreDecorator({
      loginForm: { username: "123", password: "123", error: "123" },
    })(Story),
];

export const WithLoading: Story = {
  args: {},
};
WithLoading.decorators = [
  (Story) =>
    StoreDecorator({
      loginForm: { username: "123", password: "123", error: "123", isLoading: true },
    })(Story),
];
