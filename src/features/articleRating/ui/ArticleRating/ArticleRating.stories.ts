import type { Meta, StoryObj } from "@storybook/react";
import ArticleRating from "./ArticleRating";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const articleRating = {
  rating: 3,
  feedback: "123",
};

const meta: Meta<typeof ArticleRating> = {
  title: "features/ArticleRating",
  component: ArticleRating,
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [articleRating],
      },
    ],
  },
  args: {
    articleId: "1",
  },
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Light: Story = {
  args: {},
};
Light.decorators = [
  (Story) =>
    StoreDecorator({
      user: {
        authData: {
          id: "1",
        },
      },
    })(Story),
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story), (Story) => StoreDecorator({})(Story)];

export const Red: Story = {
  args: {},
};
Red.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story), (Story) => StoreDecorator({})(Story)];
