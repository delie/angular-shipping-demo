import { applicationConfig, Preview } from "@storybook/angular";
import { storybookAppConfig } from "../src/lib/storybook-host-app.config";

const preview: Preview = {
  decorators: [applicationConfig(storybookAppConfig)],
};

export default preview;
