import type { Meta, StoryObj } from "@storybook/react";
import ProfileRating from "./ProfileRating";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const articleRating = {
  rating: 3,
  feedback: "123",
};

const meta: Meta<typeof ProfileRating> = {
  title: "features/ProfileRating",
  component: ProfileRating,
  args: {
    profileId: "1",
  },
  decorators: [
    (Story) =>
      StoreDecorator({
        user: {
          authData: {
            id: "1",
          },
        },
      })(Story),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Light: Story = {
  args: {},
};

Light.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: "GET",
      status: 200,
      response: [articleRating],
    },
  ],
};

export const WithoutRating: Story = {
  args: {},
};

WithoutRating.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: "GET",
      status: 200,
      response: [],
    },
  ],
};
