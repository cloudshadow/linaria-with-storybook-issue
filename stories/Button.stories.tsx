import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src';
import { IButtonProps } from '../src/Components/Button/type';

const meta: Meta<IButtonProps> = {
  title: 'AutoShip.Core.UI/Components',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    id: { control: 'text' },
    name: { control: 'text' },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'orange', 'danger'],
    },
  },
};
export default meta;

type Story = StoryObj<IButtonProps>;
export const ButtonComponent: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    id: '',
    name: '',
    theme: 'primary',
    children: 'button',
  },
};
