import '../styles/globals.css';
import '../styles/tailwind.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ThemeProvider } from '../theme/ThemeContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
