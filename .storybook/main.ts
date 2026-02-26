import { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    '../components/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["..\\public"],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      css: {
        modules: {
          localsConvention: 'camelCaseOnly',
        },
      },
    });
  },
};
export default config;