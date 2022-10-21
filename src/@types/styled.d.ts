import 'styled-components/native';
// import { defaultTheme } from './theme';
import { defaultTheme } from '../global/styles/theme/default';

  type Themetype = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Themetype {}
}
