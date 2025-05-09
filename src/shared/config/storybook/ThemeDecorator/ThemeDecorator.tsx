import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "@/app/providers/ThemeProvider";

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
