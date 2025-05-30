import type { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";

const meta: Meta<typeof CountrySelect> = {
  title: "entities/CountrySelect",
  component: CountrySelect,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
  args: {},
};
