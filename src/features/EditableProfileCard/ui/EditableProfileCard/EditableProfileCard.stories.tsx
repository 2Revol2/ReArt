import type { Meta, StoryObj } from "@storybook/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof EditableProfileCard> = {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {
  args: {},
};

Default.decorators = [
  (Story) =>
    StoreDecorator({
      articlesPage: {},
    })(Story),
];
