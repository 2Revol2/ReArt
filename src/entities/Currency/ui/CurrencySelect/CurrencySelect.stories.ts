import type { Meta, StoryObj } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Default: Story = {
  args: {},
};
