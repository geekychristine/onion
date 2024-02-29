import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  args: {
    title: 'Button',
    size: 'md'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {};
export const Fill: Story = {
  args: {
    title: 'Fill'
  }
};
