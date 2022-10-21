import 'styled-components/native';
import { defaultTheme } from './theme';

  type Themetype = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Themetype {}
}
