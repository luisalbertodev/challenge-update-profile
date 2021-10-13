import { rgba } from 'polished';
import { BREAKPOINTS } from 'src/shared/data';
import { IColors, IMode, ITheme, Children } from 'src/shared/models/theme.model';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { createTheme, ThemeProvider as ThemeProviderMui } from '@mui/material/styles';

const COLORS_LIGHT: IColors = {
  primary: '#2b6d6a',
  primaryHover: '#215250',
  secondary: '#2e175f',
  secondaryHover: '#1b0d38',
  light: '#fafafa',
  dark: '#000'
};

const COLORS_DARK: IColors = {
  primary: '#2b6d6a',
  primaryHover: '#215250',
  secondary: '#2e175f',
  secondaryHover: '#1b0d38',
  light: '#fafafa',
  dark: '#000'
};

const MODES: IMode = {
  light: {
    primaryLight: rgba(COLORS_LIGHT.primary, 0.5),
    primary: COLORS_LIGHT.primary,
    primaryHover: COLORS_LIGHT.primaryHover,
    secondary: COLORS_LIGHT.secondary,
    secondaryHover: COLORS_LIGHT.secondaryHover,
    light: COLORS_LIGHT.light,
    lightShade: rgba(COLORS_LIGHT.light, 0.7),
    dark: COLORS_LIGHT.dark,
    darkShade: rgba(COLORS_LIGHT.dark, 0.7),
    bg: COLORS_LIGHT.light,
    shadow: rgba(COLORS_LIGHT.dark, 0.45),
    text: rgba(COLORS_LIGHT.dark, 0.7)
  },
  dark: {
    primaryLight: rgba(COLORS_DARK.primary, 0.5),
    primary: COLORS_DARK.primary,
    primaryHover: COLORS_DARK.primaryHover,
    secondary: COLORS_DARK.secondary,
    secondaryHover: COLORS_DARK.secondaryHover,
    light: COLORS_DARK.light,
    lightShade: rgba(COLORS_DARK.light, 0.7),
    dark: COLORS_DARK.dark,
    darkShade: rgba(COLORS_DARK.dark, 0.7),
    bg: COLORS_DARK.light,
    shadow: rgba(COLORS_DARK.dark, 0.45),
    text: rgba(COLORS_DARK.light, 0.7)
  }
};

export const DEFAULT_THEME: ITheme = {
  mode: 'light',
  colors: MODES,
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 56, 60, 64],
  breakpoints: {
    sm: `@media only screen (min-width:${BREAKPOINTS.sm}px)`,
    md: `@media only screen (min-width:${BREAKPOINTS.md}px)`,
    lg: `@media only screen (min-width:${BREAKPOINTS.lg}px)`,
    xl: `@media only screen (min-width:${BREAKPOINTS.xl}px)`
  }
};

const THEME_MUI = createTheme({
  palette: {
    primary: {
      main: '#2b6d6a',
      dark: '#215250'
    },
    secondary: {
      main: '#2e175f',
      dark: '#1b0d38'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  shape: {
    borderRadius: 10
  }
});

export const ThemeProvider = ({ children }: Children) => {
  return (
    <ThemeProviderMui theme={THEME_MUI}>
      <ThemeProviderStyled theme={DEFAULT_THEME}>{children}</ThemeProviderStyled>
    </ThemeProviderMui>
  );
};
