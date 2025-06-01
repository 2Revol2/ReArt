import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Navbar> = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
};
Light.decorators = [(Story) => StoreDecorator({})(Story)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story), (Story) => StoreDecorator({})(Story)];

export const Red: Story = {
  args: {},
};
Red.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story), (Story) => StoreDecorator({})(Story)];

export const AuthNavbar: Story = {
  args: {},
};
AuthNavbar.decorators = [(Story) => StoreDecorator({ user: { authData: {} } })(Story)];
