import type { ComponentProps } from 'react'
import { styled } from './styles'

const Button = styled('button', {
  px: '$3_5',
  gap: '$2_5',
  border: 'none',
  borderRadius: '$base',
  fontWeight: '$medium',
  display: 'inline-flex',
  fontFamily: '$default',
  justifyContent: 'center',
  boxSizing: 'border-box',
  alignItems: 'center',
  transition: 'colors 0.2s ease-in-out',
  cursor: 'pointer',
  userSelect: 'none',
  outline: '3px solid $transparent',

  '& svg': {
    size: '$4',
  },

  '&:disabled': {
    opacity: 0.8,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  '&:focus': {
    outline: '3px solid $grayAlpha500',
    opacity: 0.9,
  },

  variants: {
    variant: {
      default: {
        backgroundColor: '$bg100',
        border: '1px solid $gray400',
        color: '$gray1000',

        '&:disabled': {
          backgroundColor: '$gray100',
          color: '$gray700',
          border: '1px solid $gray400',
        },

        '&:hover': {
          backgroundColor: '$gray200',
          color: '$grayAlpha1000',
        },
      },
      secondary: {
        borderWidth: 1,
        backgroundColor: '$gray1000',
        color: '$bg100',
        border: '1px solid $transparent',

        '&:disabled': {
          backgroundColor: '$gray100',
          color: '$gray700',
          border: '1px solid $gray400',
        },

        '&:hover': {
          opacity: 0.9,
        },
      },
      tertiary: {
        backgroundColor: '$transparent',
        border: '1px solid $transaprent',
        color: '$grayAlpha1000',

        '&:disabled': {
          backgroundColor: '$grayAlpha200',
          borderColor: '$grayAlpha200',
          border: '1px solid $gray400',
        },

        '&:hover': {
          backgroundColor: '$grayAlpha200',
          borderColor: '$grayAlpha200',
        },
      },
      error: {
        backgroundColor: '$red800',
        border: '1px solid $red800',
        color: '$bg100',

        '&:disabled': {
          backgroundColor: '$transparent',
          borderColor: '$transparent',
          color: '$gray700',
        },

        '&:hover': {
          backgroundColor: '$red900',
          borderColor: '$red900',
        },
      },
      success: {
        backgroundColor: '$green900',
        border: '1px solid $green800',
        color: '$bg100',

        '&:disabled': {
          backgroundColor: '$gray100',
          color: '$gray700',
          border: '1px solid $gray400',
        },

        '&:hover': {
          opacity: 0.9,
        },
      },
      warning: {
        backgroundColor: '$amber600',
        border: '1px solid $amber600',
        color: '$bg100',

        '&:disabled': {
          backgroundColor: '$gray100',
          color: '$gray700',
          border: '1px solid $gray400',
        },

        '&:hover': {
          backgroundColor: '$amber800',
        },
      },
    },
    size: {
      xs: {
        height: '$6',
        fontSize: '$xs',
      },
      sm: {
        height: '$8',
        fontSize: '$sm',
      },
      default: {
        height: '$9',
        fontSize: '$sm',
      },
      lg: {
        height: '$10',
        fontSize: '$base',
      },
    },
    svgOnly: {
      true: { p: '$0' },
      false: {},
    },
  },

  compoundVariants: [
    {
      svgOnly: true,
      size: 'default',
      css: {
        width: '$9',
      },
    },
    {
      svgOnly: true,
      size: 'lg',
      css: {
        width: '$10',
      },
    },
    {
      svgOnly: true,
      size: 'sm',
      css: {
        width: '$8',
      },
    },
    {
      svgOnly: true,
      size: 'xs',
      css: {
        width: '$6',
      },
    },
  ],

  defaultVariants: {
    variant: 'default',
    size: 'default',
    svgOnly: false,
  },
})

type ButtonProps = ComponentProps<'button'> & {
  size?: 'default' | 'lg'
  variant?:
    | 'default'
    | 'secondary'
    | 'tertiary'
    | 'error'
    | 'warning'
    | 'success'
  svgOnly?: boolean
}

export { Button, type ButtonProps }
