import { Button, type ButtonProps } from '@olympic-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpIcon } from '../components/arrow-up-icon.js'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Label',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'secondary',
        'tertiary',
        'error',
        'warning',
        'success',
      ],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xs', 'sm', 'default', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: (
      <>
        With Icon <ArrowUpIcon />
      </>
    ),
  },
}

export const SvgOnly: Story = {
  args: {
    svgOnly: true,
    children: <ArrowUpIcon />,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'default',
    children: 'Tertiary',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    size: 'default',
    children: 'Error',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'default',
    children: 'Warning',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'default',
    children: 'Success',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    children: 'Disabled',
  },
}
