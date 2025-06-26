import type { Meta, StoryObj } from "@storybook/react";
import CreateAndEditArticlePage from "./CreateAndEditArticlePage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof CreateAndEditArticlePage> = {
  title: "pages/CreateAndEditArticlePage",
  component: CreateAndEditArticlePage,
  parameters: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof CreateAndEditArticlePage>;

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
