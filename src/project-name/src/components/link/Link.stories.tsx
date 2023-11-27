import { Default, Disabled, Tertiary } from 'components/link/Link';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Default> = {
  title: 'Components/Link',
  component: Default,
};

export default meta;
type Story = StoryObj<typeof Default>;

export const PrimaryButton: Story = {
  render: () => (
    <Default
      fields={{
        Link: {
          value: {
            attributeName: 'link',
            href: 'https://www.google.com',
            title: 'Primary Button',
            text: 'Primary Button',
          },
        },
      }}
      params={{ styles: 'link__button-primary' }}
    />
  ),
};

export const PrimaryButtonWithoutLink: Story = {
  render: () => (
    <Default
      fields={{
        Link: {
          value: {
            attributeName: 'link',
            href: '',
            title: 'Primary Button',
            text: 'Primary Button',
          },
        },
      }}
      params={{ styles: 'link__button-primary' }}
    />
  ),
};

export const PrimaryButtonDisabled: Story = {
  render: () => (
    <Disabled
      fields={{
        Link: {
          value: {
            attributeName: 'link',
            href: 'https://www.google.com',
            title: 'Primary Button',
            text: 'Primary Button',
          },
        },
      }}
      params={{ styles: 'link__button-primary link__button-primary--disabled' }}
    />
  ),
};

export const SecondaryButton: Story = {
  render: () => (
    <Default
      fields={{
        Link: {
          value: {
            attributeName: 'link',
            href: 'https://www.google.com',
            title: 'Secondary Button',
            text: 'Secondary Button',
          },
        },
      }}
      params={{ styles: 'link__button-secondary' }}
    />
  ),
};

export const SecondaryButtonWithNoLink: Story = {
  render: () => (
    <Default
      fields={{
        Link: {
          value: {
            attributeName: 'link',
            href: '',
            title: 'Secondary Button',
            text: 'Secondary Button',
          },
        },
      }}
      params={{ styles: 'link__button-secondary' }}
    />
  ),
};

export const SecondaryButtonDisabled: Story = {
  render: () => (
    <Disabled
      fields={{
        Link: {
          value: {
            attributeName: 'link',
            href: 'https://www.google.com',
            title: 'Secondary Button',
            text: 'Secondary Button',
          },
        },
      }}
      params={{ styles: 'link__button-secondary link__button-secondary--disabled' }}
    />
  ),
};

export const TextLinkDefault: Story = {
  render: () => (
    <Default
      fields={{
        Link: {
          value: {
            attributeName: 'link',
            href: 'https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna',
            title: 'Text Link',
            text: 'Text Link',
          },
        },
      }}
      params={{ styles: '' }}
    />
  ),
};

export const TertiaryButton: Story = {
  render: () => (
    <Tertiary
      fields={{
        Link: {
          value: {
            attributeName: 'link',
            href: 'https://www.google.com',
            title: 'Tertiary Button',
            text: 'Tertiary Button',
          },
        },
      }}
      params={{}}
    />
  ),
};
