import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    primary: string;
    background: string;
    title: string;
    description: string;
    loadingText: string;
    hover: string;
    categoryText: string;
  }
}
