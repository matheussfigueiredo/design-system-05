import {
  colors,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@olympic-ui/tokens'
import {
  type CSSProperties,
  createStitches,
  defaultThemeMap,
} from '@stitches/react'

const defaultTheme = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
}

type ThemeToken<Scale extends keyof typeof defaultTheme> =
  `$${Extract<keyof (typeof defaultTheme)[Scale], string>}`

export const {
  styled,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: defaultTheme,
  utils: {
    //* Margin */
    m: (value: ThemeToken<'space'>) => ({ margin: value }),
    mt: (value: ThemeToken<'space'>) => ({ marginTop: value }),
    mr: (value: ThemeToken<'space'>) => ({ marginRight: value }),
    mb: (value: ThemeToken<'space'>) => ({ marginBottom: value }),
    ml: (value: ThemeToken<'space'>) => ({ marginLeft: value }),
    mx: (value: ThemeToken<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ThemeToken<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    //* Padding */
    p: (value: ThemeToken<'space'>) => ({ padding: value }),
    pt: (value: ThemeToken<'space'>) => ({ paddingTop: value }),
    pr: (value: ThemeToken<'space'>) => ({ paddingRight: value }),
    pb: (value: ThemeToken<'space'>) => ({ paddingBottom: value }),
    pl: (value: ThemeToken<'space'>) => ({ paddingLeft: value }),
    px: (value: ThemeToken<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ThemeToken<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    //* Background */
    gradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    //* Radius */
    rounded: (value: ThemeToken<'radii'>) => ({ borderRadius: value }),

    //* Interactive */
    userSelect: (value: CSSProperties['userSelect']) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    //* Scroll */
    ox: (value: CSSProperties['overflowX']) => ({ overflowX: value }),
    oy: (value: CSSProperties['overflowY']) => ({ overflowY: value }),

    //* Sizing */
    size: (value: ThemeToken<'space'>) => ({ width: value, height: value }),

    //* Hidden */
    appearance: (value: CSSProperties['appearance']) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
  },
})
