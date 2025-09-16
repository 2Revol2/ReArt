import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const notification = {
  title: "Уведомление 1",
  description: "Произошло какое-то событие",
};

const meta: Meta<typeof Navbar> = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [
          { ...notification, id: "1" },
          { ...notification, id: "2" },
          { ...notification, id: "3", href: "test" },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

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

export const AuthNavbar: Story = {
  args: {},
};
AuthNavbar.decorators = [
  (Story) =>
    StoreDecorator({
      user: { authData: { avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg" } },
    })(Story),
];
