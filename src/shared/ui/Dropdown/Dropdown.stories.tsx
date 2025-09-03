import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button/Button";

const meta: Meta<typeof Dropdown> = {
  title: "shared/Dropdown",
  component: Dropdown,
  decorators: (Story) => (
    <div style={{ padding: 200 }}>
      <Story />
    </div>
  ),
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [{ content: "profile" }, { content: "settings" }, { content: "logout" }],
  },
};

export const BottomLeft: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [{ content: "profile" }, { content: "settings" }, { content: "logout" }],
    direction: "bottom left",
  },
};

export const BottomRight: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [{ content: "profile" }, { content: "settings" }, { content: "logout" }],
    direction: "bottom right",
  },
};

export const TopLeft: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [{ content: "profile" }, { content: "settings" }, { content: "logout" }],
    direction: "top left",
  },
};

export const TopRight: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [{ content: "profile" }, { content: "settings" }, { content: "logout" }],
    direction: "top right",
  },
};
