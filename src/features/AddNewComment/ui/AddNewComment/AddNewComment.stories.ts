import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import AddNewComment from "./AddNewComment";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof AddNewComment> = {
  title: "features/AddNewComment",
  component: AddNewComment,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof AddNewComment>;

export const Light: Story = {
  args: {},
};
Light.decorators = [(Story) => StoreDecorator({})(Story)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [(Story) => StoreDecorator({})(Story), (Story) => ThemeDecorator(Theme.DARK)(Story)];

export const Red: Story = {
  args: {},
};
Red.decorators = [(Story) => StoreDecorator({})(Story), (Story) => ThemeDecorator(Theme.RED)(Story)];
