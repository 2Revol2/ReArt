import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: "type any text",
    value: "text",
  },
};

export const Dark: Story = {
  args: {
    placeholder: "type any text",
    value: "text",
  },
};

Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];
