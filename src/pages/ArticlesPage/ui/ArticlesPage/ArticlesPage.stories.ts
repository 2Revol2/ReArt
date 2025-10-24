import type { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof ArticlesPage> = {
  title: "pages/Articles/ArticlesPage",
  component: ArticlesPage,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  (Story) =>
    StoreDecorator({
      articlesPage: {},
    })(Story),
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [
  (Story) => ThemeDecorator(Theme.DARK)(Story),
  (Story) =>
    StoreDecorator({
      articlesPage: {},
    })(Story),
];

export const Red: Story = {
  args: {},
};
Red.decorators = [
  (Story) => ThemeDecorator(Theme.RED)(Story),
  (Story) =>
    StoreDecorator({
      articlesPage: {},
    })(Story),
];
