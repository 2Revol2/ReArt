import type { Meta, StoryObj } from "@storybook/react";
import { ArticleViewSelector } from "./ArticleViewSelector";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleView } from "@/entities/Article";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof ArticleViewSelector> = {
  title: "features/ArticleViewSelector",
  component: ArticleViewSelector,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Light: Story = {
  args: {},
};

export const LightSelectedSmall: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};

export const LightSelectedBig: Story = {
  args: {
    view: ArticleView.BIG,
  },
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const Red: Story = {
  args: {},
};
Red.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story)];
