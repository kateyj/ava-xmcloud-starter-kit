// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import basictheme from './basictheme';

addons.setConfig({
  theme: basictheme,
});
