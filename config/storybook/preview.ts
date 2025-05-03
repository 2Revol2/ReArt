import type { Preview } from "@storybook/react";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, (Story) => ThemeDecorator(Theme.LIGHT)(Story), RouterDecorator],
};

export default preview;
