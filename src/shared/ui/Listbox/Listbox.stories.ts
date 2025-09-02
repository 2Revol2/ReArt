import type { Meta, StoryObj } from "@storybook/react";
import { Listbox } from "./Listbox";

const meta: Meta<typeof Listbox> = {
  title: "shared/Listbox",
  component: Listbox,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Listbox>;

export const Default: Story = {
  args: {
    defaultValue: "Выберите значения",
    options: [
      { value: "1", content: "test1" },
      { value: "2", content: "test2" },
      { value: "3", content: "test3" },
    ],
  },
};

export const DirectionTop: Story = {
  args: {
    defaultValue: "Выберите значения",
    options: [
      { value: "1", content: "test1" },
      { value: "2", content: "test2" },
      { value: "3", content: "test3" },
    ],
    direction: "top",
  },
};

export const WithLabel: Story = {
  args: {
    defaultValue: "Выберите значения",
    options: [
      { value: "1", content: "test1" },
      { value: "2", content: "test2" },
      { value: "3", content: "test3" },
    ],
    label: "Выберите значения",
  },
};

export const WithDisabledOption: Story = {
  args: {
    defaultValue: "Выберите значения",
    options: [
      { value: "1", content: "test1" },
      { value: "2", content: "test2" },
      { value: "3", content: "test3", disabled: true },
    ],
    label: "Выберите значения",
  },
};
