import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,

  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Default: Story = {
  args: {},
};

Default.decorators = [(Story) => StoreDecorator({})(Story)];
