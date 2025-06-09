import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { ProfileCard } from "./ProfileCard";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
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
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: "123",
  },
};
