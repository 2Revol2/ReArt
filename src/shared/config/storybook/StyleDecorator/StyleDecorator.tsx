// eslint-disable-next-line revol/layer-imports
import "@/app/styles/index.scss";
import { Decorator } from "@storybook/react";

export const StyleDecorator: Decorator = (Story) => (
  <div>
    <Story />
  </div>
);
