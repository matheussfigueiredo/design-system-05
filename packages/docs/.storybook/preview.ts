import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming'

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#1E1E1E' },
        light: { name: 'Light', value: '#FAFAFA' },
      },
    },
    initialGlobals: {
      backgrounds: { value: 'dark' },
    },
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
