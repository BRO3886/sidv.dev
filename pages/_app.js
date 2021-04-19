import '../styles/globals.css';
import '../styles/tailwind.css';
import { ThemeProvider } from '../theme/ThemeContext';

const githubFunc = () => {
  console.log('\x1b[33m%s\x1b[0m', 'Why are you checking the console!??');
  console.log(`
   ____________________________________
  /  Why don't you check out my github \\
  \\ profile : github.com/BRO3886       /
   ------------------------------------
          \\   ^__^
           \\  (oo)\_______
              (__)\       )\\/\\
                  ||----w |
                  ||     ||
  `);
};

function MyApp({ Component, pageProps }) {
  githubFunc();
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
