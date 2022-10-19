
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/global/styles/theme/default';

import { Dashboard } from './src/screens';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Dashboard />
    </ThemeProvider>  
  )
}
