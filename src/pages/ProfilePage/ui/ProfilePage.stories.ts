import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {},
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
};
Light.decorators = [
  (Story) =>
    StoreDecorator({
      profile: {
        form: {
          first: "Макc",
          lastname: "Револ",
          age: 17,
          currency: Currency.USD,
          country: Country.Ukraine,
          city: "Zaporozhye",
          username: "admin",
          avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
        },
      },
    })(Story),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  (Story) => ThemeDecorator(Theme.DARK)(Story),
  (Story) =>
    StoreDecorator({
      profile: {
        form: {
          first: "Макc",
          lastname: "Револ",
          age: 17,
          currency: Currency.USD,
          country: Country.Ukraine,
          city: "Zaporozhye",
          username: "admin",
          avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
        },
      },
    })(Story),
];

export const Red: Story = {
  args: {},
};

Red.decorators = [
  (Story) => ThemeDecorator(Theme.RED)(Story),
  (Story) =>
    StoreDecorator({
      profile: {
        form: {
          first: "Макc",
          lastname: "Револ",
          age: 17,
          currency: Currency.USD,
          country: Country.Ukraine,
          city: "Zaporozhye",
          username: "admin",
          avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
        },
      },
    })(Story),
];
