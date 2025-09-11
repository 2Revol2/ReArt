import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRecommendationList } from "./ArticleRecommendationList";
import { ArticleType } from "@/entities/Article";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const article = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  type: [ArticleType.IT],
  user: {
    id: "1",
    avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
    username: "Revol",
  },
  blocks: [],
};

const meta: Meta<typeof ArticleRecommendationList> = {
  title: "features/ArticleRecommendationList",
  component: ArticleRecommendationList,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Light: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
        ],
      },
    ],
  },
  decorators: [(Story) => StoreDecorator({})(Story)],
};
