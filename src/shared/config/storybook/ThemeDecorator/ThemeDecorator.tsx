import { StoryFn } from "@storybook/react";
// eslint-disable-next-line revol/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/constants/theme";

export const ThemeDecorator = (theme: Theme) =>
  function (StoryCom: StoryFn) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryCom />
        </div>
      </ThemeProvider>
    );
  };
