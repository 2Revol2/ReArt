import type { StorybookConfig } from "@storybook/react-webpack5";
import { buildCssLoader } from "config/build/loaders/buildCssLoader";
import { buildSvgLoader } from "config/build/loaders/buildSvgLoader";
import path from "path";
import { RuleSetRule } from "webpack";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../../src"),
      };
    }
    config.module.rules.push(buildCssLoader(true));

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
    config.module.rules.push(buildSvgLoader());

    return config;
  },
};
export default config;
