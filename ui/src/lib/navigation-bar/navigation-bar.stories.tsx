import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './navigation-bar';
import { navigationBarProps } from './mocks';

// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  title: 'NavigationBar',
  args: { ...navigationBarProps }
};
export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Primary: Story = {
  args: { ...navigationBarProps }
};

export const Header: Story = {
  args: {},
  decorators: [Story => <div className="grid-container">{<Story />}</div>]
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   expect(canvas.getByText(/Welcome to NavigationBar!/gi)).toBeTruthy();
  // }
};
