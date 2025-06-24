import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilters";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

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
