import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis culpa ullam
          placeat veritatis a totam obcaecati, qui doloremque atque voluptatibus molestias`,
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis culpa ullam
          placeat veritatis a totam obcaecati, qui doloremque atque voluptatibus molestias`,
  },
};

Dark.decorators = [(Story) => ThemeDecorator(Theme.DARK)(Story)];

export const Red: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis culpa ullam
          placeat veritatis a totam obcaecati, qui doloremque atque voluptatibus molestias`,
  },
};

Red.decorators = [(Story) => ThemeDecorator(Theme.RED)(Story)];
