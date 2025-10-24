import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilters";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof ArticlesPageFilters> = {
  title: "pages/Articles/ArticlesPageFilters",
  component: ArticlesPageFilters,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

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
