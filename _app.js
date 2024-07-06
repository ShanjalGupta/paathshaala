import '../styles/globals.css';
import { useEffect } from 'react';
import useThemeStore from '../store/themeStore';

function MyApp({ Component, pageProps }) {
  const { theme } = useThemeStore();
  
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);
  
  return <Component {...pageProps} />;
}

export default MyApp;
