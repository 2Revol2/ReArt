import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "shared/Flex",
  component: Flex,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const JustifyCenter: Story = {
  args: {
    justify: "center",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const JustifyCenterGap4: Story = {
  args: {
    gap: "4",
    justify: "center",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const JustifyCenterGap8: Story = {
  args: {
    gap: "8",
    justify: "center",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const JustifyCenterGap16: Story = {
  args: {
    gap: "16",
    justify: "center",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const JustifyCenterGap32: Story = {
  args: {
    gap: "32",
    justify: "center",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: "column",
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};
