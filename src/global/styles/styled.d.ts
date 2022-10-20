import 'styled-components/native';
import { defaultTheme } from './theme';

  type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface defaultTheme extends ThemeType {}

}
