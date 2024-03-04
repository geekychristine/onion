import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
  args: {
    children:
      'Sunt nostrud ad ipsum consequat sint. Do pariatur exercitation magna ea sit non nulla laborum proident mollit velit. Lorem veniam esse qui culpa reprehenderit veniam officia laborum reprehenderit ut reprehenderit adipisicing. Mollit tempor esse ad tempor ullamco.',
    size: 'md'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    density: {
      control: 'select',
      options: ['condensed', 'normal', 'spacious']
    }
  }
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Card!/gi)).toBeTruthy();
  }
};
