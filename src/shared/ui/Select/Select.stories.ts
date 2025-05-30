import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Укажите валюту",
    options: [
      { value: "UA", content: "UA" },
      { value: "USDT", content: "USDT" },
      { value: "EUR", content: "EUR" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: "Укажите валюту",
    options: [
      { value: "UA", content: "UA" },
      { value: "USDT", content: "USDT" },
      { value: "EUR", content: "EUR" },
    ],
    readonly: true,
  },
};
