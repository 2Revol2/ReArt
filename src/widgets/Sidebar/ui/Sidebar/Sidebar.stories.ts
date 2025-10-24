import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Sidebar } from "./Sidebar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof Sidebar> = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
};
Light.decorators = [
  (Story) => ThemeDecorator(Theme.DARK)(Story),
  (Story) => StoreDecorator({ user: { authData: {} } })(Story),
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [
  (Story) => ThemeDecorator(Theme.DARK)(Story),
  (Story) => StoreDecorator({ user: { authData: {} } })(Story),
];

export const Red: Story = {
  args: {},
};
Red.decorators = [
  (Story) => ThemeDecorator(Theme.RED)(Story),
  (Story) => StoreDecorator({ user: { authData: {} } })(Story),
];

export const NotAuth: Story = {
  args: {},
};
NotAuth.decorators = [(Story) => StoreDecorator({})(Story)];
