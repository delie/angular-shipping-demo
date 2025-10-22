import { applicationConfig, Preview } from '@storybook/angular';
import { storybookAppConfig } from '../src/lib/storybook-host-app.config';

const preview: Preview = {
  decorators: [
    applicationConfig(storybookAppConfig),
  ],
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#222222', default: true },
      },
    },
  },

  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
};

export default preview;
