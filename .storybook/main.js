/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "storybook-css-modules-preset",
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-a11y',
      options: {
        // Configure the addon options here
        // For example:
        // rules: ['color-contrast', 'link-name'],
        // manual: true,
      },
    },
    {
      name: 'environment-decorator',
      fn: 'EnvironmentDecorator',
    },
  ],
  features: {
    storyStoreV7: true,
  },
  mdx: {
    loader: 'babel-loader',
    options: {
      plugins: ['@babel/plugin-transform-react-jsx'],
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;