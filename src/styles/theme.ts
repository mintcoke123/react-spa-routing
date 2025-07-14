import { LIGHT_COLORS, DARK_COLORS } from '../constants/colors';

export const lightTheme = {
  mode: 'light' as const,
  ...LIGHT_COLORS,
};

export const darkTheme = {
  mode: 'dark' as const,
  ...DARK_COLORS,
};
