import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import CssBaseline from '@mui/material/CssBaseline';

import { muiTheme } from '../utils/muiTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MyApp;
