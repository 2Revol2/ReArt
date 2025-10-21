import type { Meta, StoryObj } from "@storybook/react";
import ArticleRating from "./ArticleRating";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const articleRating = {
  rating: 3,
  feedback: "123",
};

const meta: Meta<typeof ArticleRating> = {
  title: "features/ArticleRating",
  component: ArticleRating,
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
Light.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: "GET",
      status: 200,
      response: [articleRating],
    },
  ],
};

export const WithoutRating: Story = {
  args: {},
};

WithoutRating.decorators = [
  (Story) =>
    StoreDecorator({
      user: {
        authData: {
          id: "1",
        },
      },
    })(Story),
];

WithoutRating.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: "GET",
      status: 200,
      response: [],
    },
  ],
};
