import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "shared/Drawer",
  component: Drawer,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Drawer>;

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
