import type { Meta, StoryObj } from "@storybook/react";
import { RatingCard } from "./RatingCard";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof RatingCard> = {
  title: "entities/RatingCard",
  component: RatingCard,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

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

export const WithFeedback: Story = {
  args: {
    hasFeedback: true,
    feedbackTitle: "Feedback title",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Rate the article",
  },
};
