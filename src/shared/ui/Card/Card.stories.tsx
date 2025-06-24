import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardTheme } from "./Card";
import { Text } from "../Text/Text";

const meta: Meta<typeof Card> = {
  title: "shared/Card",
  component: Card,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <Text title="title" text="text" />
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    theme: CardTheme.OUTLINED,
    children: (
      <div>
        <Text title="title" text="text" />
      </div>
    ),
  },
};
