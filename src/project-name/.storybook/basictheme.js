// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // brandTitle: 'Storybook',
  // brandUrl: '',
  // brandImage: 'ava_logo.jpg',
  // brandTarget: '_self',

  //
  colorPrimary: '#ff5800',
  colorSecondary: '#dc4600',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#cccccc',
  appBorderRadius: 4,

  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#000000',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
