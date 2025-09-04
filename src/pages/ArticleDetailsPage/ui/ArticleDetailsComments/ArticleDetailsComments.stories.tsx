import type { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";
import { ArticleDetailsComments } from "./ArticleDetailsComments";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleDetailsComments> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
  decorators: [
    (Story) => (
      <Suspense fallback={<div>loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Default: Story = {
  args: {},
};

Default.decorators = [(Story) => StoreDecorator({})(Story)];
