import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "shared/Textarea",
  component: Textarea,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Light: Story = {
  args: {
    placeholder: "type any text",
    value: "text",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "type any text",
    value: "text",
    readonly: true,
  },
};

export const Dark: Story = {
  args: {
    placeholder: "type any text",
    value: "text",
  },
};

Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const Red: Story = {
  args: {
    placeholder: "type any text",
    value: "text",
  },
};

Red.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story)];
