import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

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

export const NotAuth: Story = {
  args: {},
};
NotAuth.decorators = [(Story) => StoreDecorator({})(Story)];
