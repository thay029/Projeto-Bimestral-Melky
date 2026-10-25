export type ThemeColors = {
  background: string;
  primary: string;
  text: string;
  textMuted: string;
  onPrimary: string;
  track: string;
};

export const darkColors: ThemeColors = {
  background: '#020B1A',
  primary: '#22D3FF',
  text: '#FFFFFF',
  textMuted: '#D5DCE6',
  onPrimary: '#020B1A',
  track: '#3A4A5C',
};

export const lightColors: ThemeColors = {
  background: '#F4F8FC',
  primary: '#0891B2',
  text: '#0B1626',
  textMuted: '#3A4A5C',
  onPrimary: '#FFFFFF',
  track: '#B8C4D1',
};

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
};