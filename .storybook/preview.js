/** @type { import('@storybook/react').Preview } */
import { DocsPage } from '@storybook/addon-docs/blocks';

const preview = {
  title: 'My Storybook',
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocsPage,
    },
    environment: {
      defaultEnvironment: 'light',
      environments: [
        { name: 'Light', value: 'light' },
        { name: 'Dark', value: 'dark' },
      ],
    },
  },
};

export default preview;