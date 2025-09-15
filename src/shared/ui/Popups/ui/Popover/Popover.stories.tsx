import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../../../Button/Button";

const meta: Meta<typeof Popover> = {
  title: "shared/Popover",
  component: Popover,
  decorators: (Story) => (
    <div style={{ padding: 200 }}>
      <Story />
    </div>
  ),
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: <div>123123123</div>,
    trigger: <Button>trigger</Button>,
  },
};

export const DirectionTopLeft: Story = {
  args: {
    direction: "top left",
    children: <div>123123123</div>,
    trigger: <Button>trigger</Button>,
  },
};

export const DirectionTopRight: Story = {
  args: {
    children: <div>123123123</div>,
    direction: "top right",
    trigger: <Button>trigger</Button>,
  },
};

export const DirectionBottomLeft: Story = {
  args: {
    children: <div>123123123</div>,
    direction: "bottom left",
    trigger: <Button>trigger</Button>,
  },
};

export const DirectionBottomRight: Story = {
  args: {
    children: <div>123123123</div>,
    direction: "bottom right",
    trigger: <Button>trigger</Button>,
  },
};
