/**
 * Generates React boilerplate for a component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns component storybook src boilerplate as a string
 */
function generateStorySrc(componentName: string): string {
  return `import { Default } from './${componentName}';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Default> = {
  title: 'Components/${componentName}',
  component: Default,
};

export default meta;
type Story = StoryObj<typeof Default>;

export const DefaultView: Story = {
  render: () => <Default params={{ name: 'to-do' }} fields={{ name: 'to-do '}} />,
};
`;
}

export default generateStorySrc;
