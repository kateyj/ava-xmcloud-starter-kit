import type { Preview } from '@storybook/react';
import './../src/assets/main.scss';
import React from 'react';
import { createMock } from 'storybook-addon-module-mock';
import * as nextLocalization from 'next-localization';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  tabletPortrait: {
    name: 'Tablet portrait',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tablet: {
    name: 'Tablet landscape',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1728px',
      height: '1024px',
    },
  },
  largeDesktop: {
    name: 'Large Desktop',
    styles: {
      width: '1729px',
      height: '1024px',
    },
  },
};

const preview: Preview = {
  parameters: {
    moduleMock: {
      mock: () => {
        // eslint-disable-next-line prettier/prettier
        const mock = createMock(nextLocalization, 'useI18n');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mock.mockReturnValue({ t: () => 'Translated text' } as unknown as any);
        return [mock];
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'someDefault',
    },
  },
  decorators: [(Story) => <Story />],
};

export default preview;
