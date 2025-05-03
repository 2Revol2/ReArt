import { StoryFn } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) =>
  function (StoryCom: StoryFn) {
    return (
      <div className={`app ${theme}`}>
        <StoryCom />
      </div>
    );
  };
