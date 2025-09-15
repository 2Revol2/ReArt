import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdown } from "./AvatarDropdown";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { UserRoles } from "@/entities/User";

const meta: Meta<typeof AvatarDropdown> = {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Default: Story = {
  args: {},
};
Default.decorators = [
  (Story) =>
    StoreDecorator({
      user: {
        authData: {
          avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
        },
      },
    })(Story),
];

export const Admin: Story = {
  args: {},
};

Admin.decorators = [
  (Story) =>
    StoreDecorator({
      user: {
        authData: {
          avatar: "https://cs-games.net/uploads/posts/2020-07/1595354020_3358.jpg",
          roles: [UserRoles.ADMIN],
        },
      },
    })(Story),
];
