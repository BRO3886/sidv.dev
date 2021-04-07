import '../styles/globals.css';
import '../styles/tailwind.css';
import { ThemeProvider } from '../theme/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
